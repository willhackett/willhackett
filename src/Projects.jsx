import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'teardrop';

import DataContainer from './components/DataContainer';
import A from './components/A';

class Projects extends Component {
  static contextTypes = {
    setBreadcrumb: PropTypes.func
  }
  componentWillMount() {
    this.context.setBreadcrumb({
      link: '/',
      title: 'Not Found'
    });
  }
  render() {
    const link = (href, title) => <a className="mp" href={href} target="_blank" rel="noreferrer,nofollow" title={title}>{title}</a>

    return (
      <DataContainer>
        <h3>Projects</h3>
        <p>
          <Link to="/telstra">telstra status</Link>,<br />
          <Link to="/turnbull">the <span className="strike">enigma</span> turnbull machine</Link>,<br />
          <A href="https://www.auslaw.org/" title="auslaw">auslaw</A>,<br />
          <A href="https://www.expedia.com/pictures/" title="expedia viewfinder">expedia viewfinder</A>.
        </p>
      </DataContainer>
    );
  }
}
export default Projects;
