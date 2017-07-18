import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'teardrop';

import DataContainer from './components/DataContainer';

class NotFound extends Component {
  static contextTypes = {
    setBreadcrumb: PropTypes.func
  }
  componentWillMount() {
    this.context.setBreadcrumb({
      link: '/404',
      title: 'Not Found'
    });
  }
  render() {
    const link = (href, title) => <a className="mp" href={href} target="_blank" rel="noreferrer,nofollow" title={title}>{title}</a>

    return (
      <DataContainer>
        <h3>Not Found</h3>
        <p>
          The page you have requested does not exist.
          <br />
          <Link to="/">
          Return Home
          </Link>
        </p>
      </DataContainer>
    );
  }
}
export default NotFound;
