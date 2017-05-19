import React, { Component } from 'react';
import cx from 'classnames';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: false
    }
  }
  render() {
    const { mixpanel, toggleCalendar } = this.props;

    const link = (href, title) => <a className="mp" href={href} target="_blank" rel="noreferrer,nofollow" title={title}>{title}</a>
    const email = () => {
      mixpanel.track('email click');
      window.location = 'mailto:hello@willhackett.com?subject=Greetings'
    }

    return (
      <div className="container profile">
        <div className="content">
          <h3>Will Hackett</h3>
          <h5
            onClick={() => {
              this.setState({ title: !this.state.title });
              mixpanel.track('title click')
            }}
            onMouseOver={() => {
              mixpanel.track('title hover')
            }}
            className={cx({ focus: this.state.title })}
            title="Though unprepossessing, complexities exist behind the layers of minification and obfuscation.">
            idiosyncratic.
            <small>
              Though unprepossessing, complexities exist behind the layers of minification and obfuscation.
            </small>
          </h5>
          <p className="link" onMouseOver={() => { mixpanel.track('blog hover') }}>
            {link('https://willhackett.blog', 'willhackett.blog')}
          </p>
          <p className="sub-link" onMouseOver={() => { mixpanel.track('social hover') }}>
            <a>@willhackett</a> <span className="appear"> &#8213; {link('https://twitter.com/willhackett', 'twitter')}, {link('https://instagram.com/willhackett', 'instagram')}, {link('https://linkedin.com/in/willhackett', 'linkedin')}.</span>
          </p>
          <p className="sub-link" onMouseOver={() => { mixpanel.track('contact hover') }}>
            <a>hello@willhackett.com</a> <span className="appear"> &#8213; <a onClick={email}>email</a>, <a onClick={toggleCalendar}>call</a>.</span>
          </p>
        </div>
      </div>
    );
  }
}
export default Profile;
