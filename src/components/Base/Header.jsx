import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import Logo from './Logo'

const enhancers = connect(state => ({
  expanded: state.nav
}))

const Header = ({ expanded }) => (
  <header />
)

export default enhancers(Header)