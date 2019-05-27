import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'reakit';
import cx from 'classnames';
import breakpoints from './breakpoints';

const Cover = styled('div')`
  display: flex;
  position: fixed;
  z-index: 2;
  background: ${props => props.theme.linkColor};
  color: ${props => props.theme.bgColor};
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  ${props =>
    props.animate === 2 &&
    `
  transition: transform 0.35s ease 1.05s;
  transform: translateY(100%);
  `}
`;

const Text = styled('span')`
  color: white;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
  ${breakpoints.md} {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 3rem;
  }
  ${breakpoints.lg} {
    font-size: 3rem;
    line-height: 4rem;
    margin-bottom: 4rem;
  }
  overflow: hidden;
  & > span {
    display: inline-block;
    transform: translateY(
        ${props =>
          cx({
            '-100%': props.animate === 0,
            '0%': props.animate === 1,
            '150%': props.animate >= 2
          })}
      )
      ${props => (props.animate >= 2 ? 'skewY(-20deg)' : '')};
  }
`;

const Span = styled('span')`
  transition: transform ${props => (props.animate >= 2 ? 0.45 : 0.35)}s ease
    ${props => props.i * (props.animate >= 2 ? 0.15 : 0.25)}s;
  margin-right: 0.5rem;
`;

class Loader extends Component {
  static contextTypes = {
    renderer: PropTypes.oneOf(['browser', 'ssr'])
  };
  state = {
    animate: 0 //this.context.renderer === 'browser' ? 0 : 2
  };
  componentDidMount() {
    // if (this.context.renderer === 'ssr') return;
    setTimeout(() => {
      this.setState({ animate: 1 });
      setTimeout(() => {
        this.setState({ animate: 2 });
      }, 1400);
    }, 50);
  }
  render() {
    // if (this.context.renderer === 'ssr') return null;
    const { animate } = this.state;

    return (
      <Cover animate={animate}>
        <Text role="presentation" animate={animate}>
          <Span i={0}>Business</Span>
          <Span i={1}> &amp; technology;</Span>
          <Span i={2}>gin &amp;</Span>
          <Span i={3}>skateboards.</Span>
        </Text>
      </Cover>
    );
  }
}

export default Loader;
