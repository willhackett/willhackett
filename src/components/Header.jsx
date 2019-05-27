import React from 'react';
import { InlineFlex, styled } from 'reakit';
import { Link } from 'gatsby';
import { withTheme } from 'styled-components'

import breakpoints from './breakpoints';
import Logo from './Logo'
import Box from './Box'

const HeaderContainer = styled.div`
  position: fixed;
  background: ${props => props.theme.bgColor};
  height: 3.5rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: ${props => props.theme.headerBoxShadow};
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

const HeaderLogo = styled(Logo)`
svg {
  height: 1.5rem;
  max-width: 3rem;
}
`

const HeaderLogoLink = styled(Link)`
color: white;
text-decoration: none;
font-weight: 700;
margin: 0;
line-height: 0rem;
`

const Header = ({ theme }) => (
  <HeaderContainer>
    <Box>
      <InnerHeaderContainer>
        <InlineFlex justifyContent="left">
          <HeaderLogoLink to="/">
            <Logo color={theme.linkColor} size="2" />
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

export default withTheme(Header);
