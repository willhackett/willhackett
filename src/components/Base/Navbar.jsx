import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'

import Logo from './Logo'

const enhancers = connect(state => ({
  expanded: state.nav
}))

const Navbar = ({ expanded }) => (
  <nav>
    <Link className="nav--logo" to="/">
      <Logo />
      <div className="nav--title">
        Will Hackett
        <br />
      </div>
    </Link>
    <div className="nav--divider" />
    <ul className="nav--list">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/studies">Studies</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <ul className="nav--footer">
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/willhackett" target="blank" rel="noopener noreferrer">LinkedIn</a>
      </li>
    </ul>
  </nav>
)

export default enhancers(Navbar)