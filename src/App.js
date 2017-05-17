import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import ua from 'universal-analytics';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    mixpanel.init('8b5cc248b59f31fb58343a0a0accce5c');
    mixpanel.track_links('.mp', { referrer: document.referrer });
    this.visitor = ua('UA-62575715-1', {https: true});
    this.visitor.pageview("/").send()
  }
  render() {
    const link = (href, title) => <a className="mp" href={href} target="_blank" rel="noreferrer,nofollow" title={title}>{title}</a>
    const email = () => {
      mixpanel.track('email click');
      window.location = 'mailto:hello@willhackett.com?subject=Greetings'
    }
    const blog = () => {
      mixpanel.track('blog click');

    }

    return (
      <div className="container profile">
        <div className="row">
          <div>
            <h3>Will Hackett</h3>
            <h5 title="Though unprepossessing, complexities exist behind the layers of minification and obfuscation.">idiosyncratic.</h5>
            <p className="link">
              {link('https://willhackett.blog', 'willhackett.blog')}
            </p>
            <p className="socials" onMouseOver={() => { mixpanel.track('social hover') }}>
              <u>@willhackett</u> <span className="appear"> &#8213; {link('https://twitter.com/willhackett', 'twitter')}, {link('https://instagram.com/willhackett', 'instagram')}, {link('https://linkedin.com/in/willhackett', 'linkedin')}.</span>
            </p>
            <p className="link" onClick={email}>
              hello@willhackett.com
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
