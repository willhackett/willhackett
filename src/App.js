import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import ua from 'universal-analytics';
import cx from 'classnames';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import { MatchGroup, Match, Miss } from 'teardrop';

import './App.css';
import Profile from './Profile.jsx';
import Calendar from './Calendar.jsx';
import TelstraStatus from './TelstraStatus.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    mixpanel.init('8b5cc248b59f31fb58343a0a0accce5c');
    mixpanel.track_links('.mp', { referrer: document.referrer });
    this.visitor = ua('UA-62575715-1', {https: true});
    this.visitor.pageview("/").send()

    this.state = {
      calendar: false
    }
  }
  render() {
    console.log(this.props);
    const toggleCalendar = () => this.setState({ calendar: !this.state.calendar });
    return (
      <MatchGroup>
        <Match exactly pattern="/">
          { route => (
            <div className={cx({ 'display-calendar': this.state.calendar })}>
              <Profile mixpanel={mixpanel} state={this.state} toggleCalendar={toggleCalendar.bind(this)} />
              <Calendar mixpanel={mixpanel} state={this.state} toggleCalendar={toggleCalendar.bind(this)}/ >
            </div>
          )}
        </Match>
        <Match pattern="/telstra">
          {route => <TelstraStatus {...route} />}
        </Match>
        <Miss>
          <h4>404 - Not Found</h4>
        </Miss>
      </MatchGroup>
    );
  }
}

export default App;
