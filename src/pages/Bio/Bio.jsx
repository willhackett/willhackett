// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from 'components/Page'
import { WH } from 'components/Logo'

import waitForImageToLoad from 'utils/waitForImageToLoad'

import will from './will.jpg'
import './Bio.css'

type PropsType = {
  ready: () => void
}
type StateType = {
}

class Bio extends Component<PropsType, StateType> {
  state = {
    type: false
  }
  componentDidMount() {
    waitForImageToLoad(will, this.props.ready)
  }
  render() {
    return (
      <Page className="imageblock switchable height-100">
        <div className="imageblock__content col-lg-5 col-sm-4 pos-right">
          <div className="background-image-holder" style={{
            background: `url(${will})`,
            opacity: 1,
          }} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-7 contact--types">
              <h1>Bio</h1>
              <h3>Who am i? What am i about?</h3>
              <p>Hi - I'm Will. I spent a lot of time trying to figure out how to make sure this bio doesn't sound like an online dating profile, so we're leaving long walks on the beach and a thousand-star picnic out of it.</p>
              <p>I'm a software engineer but more specifically a <a href="http://essays.davidchouinard.com/the-product-engineer" target="_blank" rel="noopener noreferrer" title="What the heck is a product engineer?">product engineer</a>. I make products from the ground up&mdash;assess viability, build a roadmap, gather a team, kick goals and deliver a killer end result.</p>
              <p>I've founded a few startups in my career and have learned lessons important to product development&mdash;<i>"the customer comes first"</i>, <i>"no idea is a dumb idea"</i> and <i>"just get shit done"</i>.</p>
              <p>Beyond building great products I'm a social presence at networking events and nearby gin distilleries. I spend a great deal of time in the gym and make an effort to passively collect as much data related to my workouts as possible&mdash;a mere snapshop is visible on my <Link to="/">homepage</Link>. I enjoy skiing and my favorite time of the year is winter. I've recently adopted a Siberian Husky named Blue.</p>
              <h3>Social impact and profit for purpose</h3>
              <p>I believe in products that can bring some degree of real social impact. I've recently joined InnoWell in Melbourne which aims to better mental health&mdash;a topic of significant importance to myself.</p>
              <p>I believe in bridging the gap between for-profit and non-profit organisations and building a sustainable, commercially viable product. <i>Who says you can't make money whlie making a difference?</i></p>
              <h3>Next steps; my future</h3>
              <p>It's hard to think about the future without remembering the <a href="https://www.imdb.com/title/tt0096874/" target="_blank" rel="noopener noreferrer">hoverboards</a> we were promised {new Date().getFullYear() - 2015} years ago. It's creative thinking and those sci-fi nuances that shape the ideas for the products I want to make.</p>
              <p>Consulting and partnering with businesses to build products that are better for their customers and creatively solve problems is ideally where I'll spend my time.</p>
              <h3>Serverless; containerisation</h3>
              <p>I'm extremely motivated by technology that mitigates the need for complex DevOps chores that slow MVP development. We're already in a future where apps are developed with no servers in the backend&mdash;merely a subscribed Platform as a Service offering.</p>
              <p>The next steps for the industry will be pushing cloud providers for technologies that discourage vendor lock-in and create a more competitive landscape for app hosting. Like infrastructure and electricity, you should be able to move your PaaS app. I hope to push the industry in this direction.</p>
              <h3>Working with</h3>
              <p>I'm quite easy to work with but generally work best when a transparent and open dialogue is kept within the team. Keeping the channels clear helps <i>get shit done</i>, kill biases and create a forum for great ideas.</p>
              <p>I maintain three policies when building products; it's important for those working with me to know them&mdash;<i>"the customer comes first"</i>, <i>"no idea is a dumb idea"</i> and <i>"just get shit done"</i>. With every new idea, I always ask <i>"how does this benefit the customer?"</i></p>
              <p>Team environments offer the best way for people to teach, learn and display excellence. I expect everybody in my teams to bring creativity, enthusiasm and an encouraging persona to the workplace. I believe in a <a href="https://www.tlnt.com/why-a-hands-off-approach-to-learning-is-best/" target="_blank" rel="noopener noreferrer">hands-off</a> approach to teaching&mdash;talking out a problem is far more effective than just solving it for you.</p>
              <p><a href="https://www.youtube.com/watch?v=xBbOAVSBvpE" rel="noopener noreferrer" target="_blank">On Wednesdays we wear pink</a> and on Fridays we drink&mdash;in my teams we should always take breaks to hear about each other's lives, exchange theories about the universe and dispute Douglas Adam's answer to the meaning of life.</p>
              <h3>Coffee order</h3>
              <p>This is a simple one. Before 12pm, it's a flat white. After 12pm, it's a chai latte. Pulling a late nighter; I'll go for a dirty chai (chai latte with a shot of espresso).</p>
              <h3>Anything i missed? Need some clarity?</h3>
              <p>Please <Link to="/contact">contact me</Link> about it.</p>
            </div>
          </div>
        </div>
        <WH />
      </Page>
    )
  }
}
export default Bio
