// @flow
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import Loader from 'components/Loader'
import MainMenu from 'components/MainMenu'

const Home = Loader(() => import('pages/Home'), true)

type PropsType = {}
type StateType = {}

class Entry extends Component<PropsType, StateType> {
  render() {
    return (
      <Fragment>
        <MainMenu />
        <Route exact path="/" component={Home} />
      </Fragment>
    )
  }
}
export default Entry
