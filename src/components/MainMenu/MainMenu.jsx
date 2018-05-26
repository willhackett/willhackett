// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames'

import { Stacked } from 'components/Logo'

import './MainMenu.css'

type PropsType = {
  location: Object,
}
type StateType = {
  menu: boolean,
  open: boolean,
}

class MainMenu extends Component<PropsType, StateType> {
  state = {
    menu: false,
    open: false,
  }
  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.location.pathname !== this.props.location.pathname && this.state.open) {
      this.toggle()
    }
  }
  toggle = () => {
    const open = this.state.open
    if (!open) {
      this.setState({ open: true })
      setTimeout(() => this.setState({ menu: true }), 500)
      return
    }
    if (open) {
      this.setState({ menu: false })
      setTimeout(() => this.setState({ open: false }), 500)
    }
  }
  render() {
    const { state: { menu, open } } = this
    return (
      <div className={cx('menu--container', {
        open,
      })}>
        <div className="menu--icon--container">
          <div className="menu--icon" onClick={this.toggle}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <CSSTransition
          in={menu}
          exit
          mountOnEnter
          unmountOnExit
          classNames="menu--nav--transition"
          timeout={500}
          >
          <div className="menu--nav--container">
            <div className="menu--nav">
              <div className="menu--nav--item">
                <Link to="/">Home</Link>
              </div>
              <div className="menu--nav--item">
                <Link to="/bio">Bio</Link>
              </div>
              <div className="menu--nav--item">
                <Link to="/products">Products</Link>
              </div>
              <div className="menu--nav--item">
                <Link to="/blog">Blog</Link>
              </div>
              <div className="menu--nav--item">
                <Link to="/contact">Contact</Link>
              </div>
              <div className="menu--nav--sub-items">
                <a href="https://www.instagram.com/willhackett" target="blank" rel="noopener noreferrer">
                  <i className="icon socicon-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/willhackett" target="blank" rel="noopener noreferrer">
                  <i className="icon socicon-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </CSSTransition>
        {open && <Stacked />}
      </div>
    )
  }
}
export default MainMenu
