// @flow
import React, { Component, type Node } from 'react'

type PropsType = {}

type StateType = {
  component: Node,
}

const Loader = (importMethod: () => Promise<{ default: Node }>) => {
  class LoaderComponent extends Component<PropsType, StateType> {
    state = {
      component: null
    }
    async componentDidMount() {
      const { default: component } = await importMethod()

      this.setState({
        component: component
      });
    }
    render() {
      const { component } = this.state

      if (!component) {
        return (
          <div>Loading...</div>
        )
      }
      return <component />
    }
  }

  return LoaderComponent
}
export default Loader
