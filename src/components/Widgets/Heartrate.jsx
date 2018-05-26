// @flow

import React from 'react'

type PropsType = {
  heart: {
    rate: number,
    lastSync: string
  }
}

const Heartrate = ({ heart }: PropsType) => (
  <div className="widget--container">
    <div className="widget--icon">
      <i className="icon icon-Cardiovascular" />
    </div>
    <div className="widget--metrics">
      <span>{heart.rate} bpm</span>
      <span>Synced {heart.lastSync}</span>
    </div>
  </div>
)
export default Heartrate
