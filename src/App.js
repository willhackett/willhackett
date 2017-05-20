import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import ua from 'universal-analytics';
import cx from 'classnames';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

import './App.css';
import Profile from './Profile.jsx';
import Calendar from './Calendar.jsx';

class App extends Component {
  constructor() {
    super();
    mixpanel.init('8b5cc248b59f31fb58343a0a0accce5c');
    mixpanel.track_links('.mp', { referrer: document.referrer });
    this.visitor = ua('UA-62575715-1', {https: true});
    this.visitor.pageview("/").send()

    this.state = {
      calendar: false
    }
  }
  render() {
    const toggleCalendar = () => this.setState({ calendar: !this.state.calendar });
    return (
      <div className={cx({ 'display-calendar': this.state.calendar })}>
        <Profile mixpanel={mixpanel} state={this.state} toggleCalendar={toggleCalendar.bind(this)} />
        <Calendar mixpanel={mixpanel} state={this.state} toggleCalendar={toggleCalendar.bind(this)}/ >
      </div>
    );
  }
}

export default App;
