// @flow
import React from 'react'
import Page from 'components/Page'

import profile from './profile.jpg'

const Home = () => (
  <Page className="cover imagebg">
    <div
      className="background-image-holder"
      style={{
        transform: 'translate3d(0, 0, 0)',
        background: `url(${profile})`,
        opacity: 1,
      }}
    >
      <img alt="background" src={profile} />
    </div>
  </Page>
)
export default Home
