// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Page from 'components/Page'
import { Stacked } from 'components/Logo'
import { type LoaderTypes } from 'components/Loader'
import { Playback, Heartrate, Steps } from 'components/Widgets'

import waitForImageToLoad from 'utils/waitForImageToLoad'
import { base } from 'store/rebase'

import profile from './profile.jpg'

import './Home.css'

type PropsType = LoaderTypes & {}

type StateType = {
  home: Object
}

class Home extends Component<PropsType, StateType> {
  state = {
    home: {},
    open: false
  }
  componentDidMount() {
    waitForImageToLoad(profile, this.props.ready)
    base.bindToState('home/data', {
      asArray: false,
      context: this,
      state: 'home',
    })
  }
  render() {
    const spotifyAccessToken = get(this.state, 'home.spotify.accessToken')
    const heartData = get(this.state, 'home.health.heart')
    const stepsData = get(this.state, 'home.health.steps')

    return (
      <Page className="cover home--root imagebg">
        <Helmet>
          <title>Will Hackett—product engineer, founder of OpenClub, founder of Firelabs</title>
          <meta title="description" content="I'm a software engineer, but specifically a product engineer. I've built products big and small, and used by thousands of people." />
        </Helmet>
        <div
          className="background-image-holder home--background"
          style={{
            background: `url(${profile})`,
            opacity: 1,
          }}
        />
        <div className="home--tint" />
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-7">
              <h1 className="home--shadow">I make digital products.</h1>
              <div className="row">
                <div className="col-sm-3 p-0">
                  {heartData && <Heartrate heart={heartData} />}
                </div>
                <div className="col-sm-3 p-0">
                  {stepsData && <Steps steps={stepsData} />}
                </div>
                <div className="col-sm-6 p-0">
                  {spotifyAccessToken && <Playback accessToken={spotifyAccessToken} />}
                </div>
              </div>
    {/*          <p className="lead">
                I'm a product engineer based in Melbourne. I'm passionate about building innovative digital products, creating new ways for people to connect and using data to drive decisions.
              </p>
    */}        </div>
          </div>
        </div>
        <Stacked />
      </Page>
    )
  }
}

export default Home
