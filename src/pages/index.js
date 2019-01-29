import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
// import { Link, graphql } from 'gatsby'
import Main from '../components/Base/Main'

import thour from '../img/homepage/24hour.png'
import mood from '../img/homepage/mood.png'
import melbourne from '../img/homepage/melbourne.png'

// import { toggleNav } from '../modules/store'

import './index.scss'

const promos = [
  {
    name: '24 Hour Report',
    img: thour,
    description: 'Statistics collected from multiple media devices over the past 24 hours.',
    link: '/24hour'
  },
  {
    name: 'Melbourne in Data',
    img: melbourne,
    description: 'A data visualisation experience built from realtime data sources in Melbourne CBD.',
    link: '/melbourne'
  },
  {
    name: 'MOOD',
    img: mood,
    description: 'Build your mood — an internactive survey on how people are feeling.',
    link: '/mood'
  }
].reverse()

class Index extends Component {
  overflowContainer = React.createRef()
  state = {
    visibleSections: [1]
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollCalculation)
    this.handleScrollCalculation()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollCalculation)
  }
  handleScrollCalculation = () => {
    const scrollTotal = this.overflowContainer.current.scrollHeight
    const scrollY = window.scrollY
    const windowHeight = scrollTotal / promos.length

    console.log()

    promos.forEach((i, k) => {
      console.log(k * windowHeight, scrollY)
    })

    this.setState({
      visibleSections: promos.map((i, k) => (k + 1) * windowHeight < scrollY ? 1 : 0)
    })
  }
  render() {
    console.log(this.state)
    console.log(this.overflowContainer)
    return (
      <main style={{ height: `${promos.length * 100}vh` }} ref={this.overflowContainer}>
        {promos.map(({ name, img, description, link }, k) => (
          <div key={name} className={cx("index--cover", { hidden: this.state.visibleSections[promos.length - 1 - k] === 1 })}>
            <div className="index--cover-image" style={{ backgroundImage: `url(${img})`}} />
          </div>
        ))}
      </main>
    )
  }
}
export default connect()(Index)