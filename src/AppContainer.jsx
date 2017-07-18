import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import 'skeleton-css/css/skeleton.css';
import './App.css';

class AppContainer extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  render() {
    return (
      <div className={cx('container', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
export default AppContainer;
