// @flow

import React, { Component } from 'react'
import cx from 'classnames'
import moment from 'moment'

import nowPlaying from 'utils/nowPlaying'

type PropsType = {
  accessToken: string,
}
type StateType = {
  data: Object
}

class Playback extends Component<PropsType, StateType> {
  player: Function
  state = {
    data: {}
  }
  componentDidMount() {
    this.player = nowPlaying(() => this.props.accessToken)
    this.player.on('update', (data) => {
      this.setState({ data })
    })
    this.player.init()
  }
  componentWillUnmount() {
    this.player.unmount()
  }
  fetch = (url: string) => {
    return fetch(url, {
      headers: { Authorization: `Bearer ${this.props.accessToken}`}
    })
  }
  render() {
    const { state: { data: { item, progress_ms, is_playing } = {} } } = this

    if (!item) return (
      <div className="widget--container">
        <div className="widget--icon">
          <i className="icon icon-Music-Note2" />
        </div>
        <div className="widget--metrics">
          <span>No playback</span>
          <span>Synced from Spotify</span>
        </div>
      </div>
    )

    const { duration_ms, album: { name: albumName, images: [, , { url: albumArt }] }, artists: [ { name: artistName } ], name: songName } = item

    return (
      <div className="widget--container">
        <div className="widget--icon">
          <img src={albumArt} alt={albumName}/>
        </div>
        <div className="widget--metrics">
          <span className="widget--nowrap">{songName}</span>
          <span>{artistName} | {is_playing ? `Now Playing | ${moment(progress_ms).format('mm:ss')}` : 'Paused'}</span>
          <span
            className={cx('widget--progress', { paused: !is_playing })}
            style={{ width: `${(String)(Math.floor(100 / duration_ms * progress_ms))}%` }}
          />
        </div>
      </div>
    )
  }
}
export default Playback
