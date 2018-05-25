// @flow
import React, { Component } from 'react'
import Page from 'components/Page'

import { Stacked } from 'components/Logo'
import { type LoaderTypes } from 'components/Loader'

import waitForImageToLoad from 'utils/waitForImageToLoad'

import profile from './profile.jpg'

import './Home.css'

type PropsType = LoaderTypes & {}

class Home extends Component<PropsType> {
  componentDidMount() {
    waitForImageToLoad(profile, this.props.ready)
  }
  render() {
    return (
      <Page className="cover home--root imagebg">
        <div
          className="background-image-holder home--background"
          style={{
            background: `url(${profile})`,
            opacity: 1,
          }}
        >
          <img alt="background" src={profile} />
        </div>
        <div className="home--tint" />
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-7">
              <h2>I build digital products.</h2>
              <div className="row">
                <div className="col-sm-3">
                  MUSE
                </div>
                <div className="col-sm-3">
                  HR
                </div>
                <div className="col-sm-3">
                  LOCATION
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
