// @flow
import React, { Component, type Node, type Element } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Stacked } from 'components/Logo'

import './Loader.css'

type PropsType = {}

type StateType = {
  AsyncComponent: any,
  ready: boolean
}

export type LoaderTypes = {
  ready: () => void
}

const Loader = (importMethod: () => Promise<{ default: Node }>, waitForComponent?: boolean = false) => {
  class LoaderComponent extends Component<PropsType, StateType> {
    state = {
      AsyncComponent: null,
      ready: false,
    }
    async componentDidMount() {
      const { default: AsyncComponent } = await importMethod()

      this.setState({
        AsyncComponent
      });
    }
    ready = () => {
      this.setState({
        ready: true,
      })
    }
    render() {
      const { AsyncComponent, ready } = this.state

      const loadingAnimation = (waitForComponent && !ready) || !AsyncComponent ? (
        <CSSTransition classNames="loader--transition" timeout={250}>
          <div className="loader--root">
            <div className="loading-indicator" />
            <Stacked />
          </div>
        </CSSTransition>
      ) : null

      const asyncComponent = AsyncComponent ? (
        <CSSTransition classNames="dom--transition" timeout={0}>
          <AsyncComponent ready={this.ready}/>
        </CSSTransition>
      ) : null

      return (
        <TransitionGroup>
          {asyncComponent}
          {loadingAnimation}
        </TransitionGroup>
      )
    }
  }

  return LoaderComponent
}
export default Loader
