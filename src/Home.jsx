import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'teardrop';
import cx from 'classnames';
import AppContainer from './AppContainer';
import './Home.css';

import A from './components/A';

class Home extends Component {
  static contextTypes = {
    setBreadcrumb: PropTypes.func
  }
  componentWillMount() {
    const { setBreadcrumb } = this.context;
    setBreadcrumb({
      title: 'Home',
      link: '/'
    });
  }
  render() {
    return (
      <AppContainer className="profile">
        <div className="content">
          <h3 style={{ marginBottom: 10 }}>Will Hackett</h3>
          <p style={{ marginTop: 30 }}>
            socials:<br />
            <A href="https://willhackett.blog/" title="blog">blog</A>,<br />
            <A href="https://www.linkedin.com/in/willhackett/" title="linkedin">linkedin</A>,<br />
            <A href="https://www.twitter.com/willhackett" title="twitter">twitter</A>,<br />
            <A href="https://www.instagram.com/willhackett" title="instagram">instagram</A>,<br />
            <A mailto="hello@willhackett.com">hello@willhackett.com</A>.
          </p>

          <p style={{ marginTop: 30 }}>
            work:<br />
            <A href="https://www.openclub.co/" title="openclub">openclub</A>,<br />
            <A href="https://www.funxxion.com/" title="funxxion">funxxion</A>,<br />
            <A href="https://www.firelabs.com.au/" title="firelabs">firelabs</A>.
          </p>
          <p style={{ marginTop: 30 }}>
            open source:<br />
            <A href="https://www.npmjs.com/teardrop" title="teardrop">teardrop</A>,<br />
            <A href="https://www.github.com/OpenClubDev/icepick" title="icepick">icepick</A>,<br />
            <A href="https://www.npmjs.com/twobyfour" title="twobyfour">twobyfour</A>.
          </p>
          <p style={{ marginTop: 30 }}>
            projects:<br />
            <Link to="/telstra">telstra status</Link>,<br />
            <Link to="/turnbull">the <span className="strike">enigma</span> turnbull machine</Link>,<br />
            <A href="https://www.auslaw.org/" title="auslaw">auslaw</A>,<br />
            <A href="https://www.expedia.com/pictures/" title="expedia viewfinder">expedia viewfinder</A>.
          </p>
        </div>
      </AppContainer>
    );
  }
}
export default Home;
