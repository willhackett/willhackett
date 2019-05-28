import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { InlineFlex, styled } from 'reakit';
import { Link } from 'gatsby';
import { withTheme } from 'styled-components'

import { toggleTheme } from '../modules/store'
import breakpoints from './breakpoints';
import Logo from './Logo'
import Box from './Box'

const HeaderContainer = styled.div`
  position: fixed;
  background: ${props => props.theme.headerBg};
  height: 3.5rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: ${props => props.theme.headerBoxShadow};
  transition: box-shadow 0.5s, background 0.5s;
`

const InnerHeaderContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Menu = styled('ul')`
  display: flex;
  list-style: none;
`;

const MenuItem = styled(Link)`
  margin: auto 0.6rem;
  font-size: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  color: ${props => props.theme.catColor};
  transition: all 0.25s;
  border-bottom: 2px solid transparent;
  padding-bottom: 8px;
  &:hover {
    opacity: 0.7;
  }
`;

const HeaderLogoLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  margin: 0;
  line-height: 0rem;
  font-size: 1.4rem;
`

const Header = ({ theme, dispatch, ui }) => (
  <HeaderContainer>
    <Box>
      <InnerHeaderContainer>
        <InlineFlex justifyContent="left">
          <HeaderLogoLink to="/">
            Will Hackett
          </HeaderLogoLink>
        </InlineFlex>
        <InlineFlex justifyContent="center">
          <Menu>
            <li>
              <MenuItem title="Dev" to="/tag/dev">
                Dev
              </MenuItem>
            </li>
            <li>
              <MenuItem title="Business" to="/tag/business">
                Business
              </MenuItem>
            </li>
            <li>
              <MenuItem title="Experience" to="/tag/experience">
                Experience
              </MenuItem>
            </li>
            <li>
              <MenuItem title="Security" to="/tag/security">
                Security
              </MenuItem>
            </li>
          </Menu>
        </InlineFlex>
        <InlineFlex justifyContent="right">
          <Menu>
            <li>
              <button onClick={() => dispatch(toggleTheme)}>
                {ui === 'dark' ? 'Light' : 'Dark'}
              </button>
            </li>
            <li>
              <MenuItem title="About" to="/about">
                About
              </MenuItem>
            </li>
          </Menu>
        </InlineFlex>
      </InnerHeaderContainer>
    </Box>
  </HeaderContainer>
);

export default compose(
  withTheme,
  connect(state => ({ ui: state.theme })),
)(Header)
