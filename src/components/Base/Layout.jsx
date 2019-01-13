import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import 'purecss/build/pure-min.css'

import Header from './Header'
import Navbar from './Navbar'

import './Layout.scss'

const enhancers = connect(state => ({
  expanded: state.nav
}))

const Layout = ({ children, expanded }) => (
  <div className={cx("root--container", { expanded })}>
    <Header />
    <Navbar />
    {children}
  </div>
)

export default enhancers(Layout)