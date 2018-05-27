// @flow
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import Loader from 'components/Loader'
import MainMenu from 'components/MainMenu'

const Home = Loader(() => import('pages/Home'), true)
const Contact = Loader(() => import('pages/Contact'), true)
const Bio = Loader(() => import('pages/Bio'), true)
const Products = Loader(() => import('pages/Products'), true)

type PropsType = {}
type StateType = {}

class Entry extends Component<PropsType, StateType> {
  render() {
    return (
      <Fragment>
        <Route path="*" component={MainMenu} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/bio" component={Bio} />
        <Route path="/products" component={Products} />
      </Fragment>
    )
  }
}
export default Entry
