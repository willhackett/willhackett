import React from 'react';
import { InlineFlex, styled } from 'reakit';
import { Link } from 'gatsby';

import breakpoints from './breakpoints';
import Logo from './Logo'
import Box from './Box'

const HeaderContainer = styled.div`
  position: fixed;
  background: ${props => props.theme.black};
  height: 3rem;
  top: 0;
  left: 0;
  right: 0;
`

const InnerHeaderContainer = styled.div`
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
  font-size: 1.25rem;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.navLink};
  transition: all 0.25s;
  border-bottom: 2px solid transparent;
  padding-bottom: 8px;
  &:hover {
    padding-bottom: 4px;
    border-bottom: 2px solid ${props => props.theme.navLink};
  }
`;

const HeaderLogo = styled(Logo)`
svg {
  height: 1.5rem;
  max-width: 3rem;
}
`

const HeaderLogoLink = styled(Link)`
margin: 0;
`

const Header = () => (
  <HeaderContainer>
    <Box>
      <InnerHeaderContainer>
        <InlineFlex justifyContent="left">
          <HeaderLogoLink to="/">
            <HeaderLogo color="#ffffff" size={2} />
          </HeaderLogoLink>
        </InlineFlex>
        <InlineFlex justifyContent="right">
          <Menu>
            <li>
              <MenuItem title="Made by Will" to="/madeby">
                Digital
              </MenuItem>
            </li>
            <li>
              <MenuItem title="Made by Will" to="/madeby">
                Made by Will
              </MenuItem>
            </li>
            <li>
              <MenuItem title="Blog" to="/blog">
                Blog
              </MenuItem>
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

export default Header;
