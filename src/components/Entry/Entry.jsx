// @flow
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Loader from 'components/Loader'

const Home = Loader(() => import('pages/Home'), true)

type PropsType = {}
type StateType = {}

class Entry extends Component<PropsType, StateType> {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    )
  }
}
export default Entry
