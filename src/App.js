import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mixpanel from 'mixpanel-browser';
import ua from 'universal-analytics';
import cx from 'classnames';
import 'skeleton-css/css/normalize.css';
import { MatchGroup, Match, Miss } from 'teardrop';

import Home from './Home.jsx';
import Calendar from './Calendar.jsx';
import TelstraStatus from './TelstraStatus.jsx';
import ErrorPage from './404.jsx';
import Projects from './Projects.jsx';
import Turnbull from './Turnbull.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    mixpanel.init('8b5cc248b59f31fb58343a0a0accce5c');
    mixpanel.track_links('.mp', { referrer: document.referrer });
    this.visitor = ua('UA-62575715-1', {https: true});
    this.visitor.pageview("/").send()

    this.state = {
      breadcrumb: {
        link: '/',
        title: 'Home'
      }
    }
  }
  static childContextTypes = {
    setBreadcrumb: PropTypes.func,
    breadcrumb: PropTypes.object,
    mixpanel: PropTypes.object
  }
  setBreadcrumb(breadcrumb) {
    document.title = breadcrumb.link === '/' ? 'Will Hackett' : `${breadcrumb.title} — Will Hackett`;
    mixpanel.track('Link Clicked', {
      href: breadcrumb.link,
      title: breadcrumb.title,
      internal: true,
    });
    this.setState({
      breadcrumb
    });
  }
  getChildContext() {
    return {
      setBreadcrumb: this.setBreadcrumb.bind(this),
      breadcrumb: this.state.breadcrumb,
      mixpanel
    }
  }
  render() {
    console.log(this.props);
    return (
        <MatchGroup>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/calendar" component={Calendar} />
          <Match pattern="/telstra" component={TelstraStatus} />
          <Match pattern="/projects" component={Projects} />
          <Match pattern="/turnbull" component={Turnbull} />
          <Miss render={route => <ErrorPage {...route} />} />
        </MatchGroup>
    );
  }
}

export default App;
