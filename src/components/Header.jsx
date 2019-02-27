import React from 'react';
import { InlineFlex, Avatar, Block, styled } from 'reakit';
import { Link } from 'gatsby';

import breakpoints from './breakpoints';
import avatar from '../img/wh.jpg';

const Container = styled(InlineFlex)`
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  ${breakpoints.md} {
    height: 7rem;
  }
`;

const Menu = styled('ul')`
  display: inline-block;
`;

const MenuItem = styled(Link)`
  margin: auto 0.6rem;
  font-size: 1.25rem;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.linkColor};
  transition: all 0.25s;
  border-bottom: 2px solid transparent;
  padding-bottom: 8px;
  &:hover {
    padding-bottom: 4px;
    border-bottom: 2px solid ${props => props.theme.linkColor};
  }
`;

const Header = () => (
  <Container>
    <InlineFlex justifyContent="left">
      <Link to="/">
        <Avatar src={avatar} alt="Will Hackett" fontSize="2rem" />
      </Link>
    </InlineFlex>
    <InlineFlex justifyContent="right">
      <Menu>
        <MenuItem title="About" to="/about">
          about
        </MenuItem>
        <MenuItem title="Blog" to="/blog">
          blog
        </MenuItem>
        <MenuItem title="Contact" to="/contact">
          contact
        </MenuItem>
      </Menu>
    </InlineFlex>
  </Container>
);

export default Header;
