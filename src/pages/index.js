import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, graphql } from 'gatsby'
import Main from '../components/Base/Main'
import Logo from '../components/Base/Logo'

import { toggleNav } from '../modules/store'

import './index.scss'

const Index = ({ dispatch }) => (
  <Main>
    <div className="index--container">
      <div className="index--inner">
        <div className="index--logo">
          <button onClick={() => dispatch(toggleNav)}>
            <Logo color="#111F2F" />
          </button>
          <div className="index--text">
            <h1>Will Hackett</h1>
            <h2>Digital consultant</h2>
          </div>
        </div>
        <div className="index--spacer" />
        <div className="index--stats">
          <span>
            10,450 steps
          </span>
          <span className="spacer">
            •
          </span>
          <span>
            76 bpm
          </span>
          <span className="spacer">
            •
          </span>
          <span>
            Now playing Frozen by Disney
          </span>
          <span className="spacer">
            •
          </span>
          <span>
            78% productivity
          </span>
          <span className="spacer">
            •
          </span>
          <span>
            Last workout was Strength Training at 6:00am
          </span>
        </div>
        <div className="index--footer">
          <Link to="/">
            Find out how these stats are collected →
          </Link>
        </div>
      </div>
    </div>
  </Main>
)
export default connect()(Index)