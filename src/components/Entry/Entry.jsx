// @flow
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import Loader from 'components/Loader'
import MainMenu from 'components/MainMenu'

const Home = Loader(() => import('pages/Home'), true)
const Contact = Loader(() => import('pages/Contact'), true)

type PropsType = {}
type StateType = {}

class Entry extends Component<PropsType, StateType> {
  render() {
    return (
      <Fragment>
        <Route path="*" component={MainMenu} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Fragment>
    )
  }
}
export default Entry
