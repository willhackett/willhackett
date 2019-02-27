import React from 'react';
import { styled } from 'reakit';
import breakpoints from './breakpoints';

const FooterContainer = styled('footer')`
  display: flex;
  margin: 4rem auto;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterContent = styled('div')`
  text-align: center;
  margin: 1rem auto;
  ${breakpoints.md} {
    text-align: left;
    margin: initial;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      Copyright © Will Hackett, Firelabs Pty Ltd. {new Date().getFullYear()}.
      <br />
      ABN 51 167 446 451
    </FooterContent>
    <FooterContent>wh</FooterContent>
  </FooterContainer>
);

export default Footer;
