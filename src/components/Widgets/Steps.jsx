// @flow

import React from 'react'

type PropsType = {
  steps: {
    count: number,
    lastSync: string
  }
}

const Steps = ({ steps }: PropsType) => (
  <div className="widget--container">
    <div className="widget--icon">
      <i className="icon icon-Slippers" />
    </div>
    <div className="widget--metrics">
      <span>{steps.count} steps</span>
      <span>Synced {steps.lastSync}</span>
    </div>
  </div>
)
export default Steps
