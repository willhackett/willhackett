import React from 'react';
import { Link } from 'gatsby';
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

const SvgLogo = styled('svg')`
  width: 2rem;
  height: 2rem;
`;

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      Copyright © Will Hackett, Firelabs Pty Ltd. {new Date().getFullYear()}.
      <br />
      ABN 51 167 446 451
    </FooterContent>
    <FooterContent>
      <Link to="/">
        <SvgLogo
          width="245px"
          height="245px"
          viewBox="0 0 245 245"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M119.107677,137.142454 L132.37986,86 L147,86 L126.676969,160 L111.953141,160 L95.1555334,107.291961 L78.3579262,160 L63.4267198,160 L43,86 L58.1385842,86 L71.6181456,136.933709 L87.8973081,86 L102.724826,86 L119.107677,137.142454 Z M202,143 L190.851536,143 L190.851536,119.363893 L166.068259,119.363893 L166.068259,143 L155,143 L155,86 L166.068259,86 L166.068259,108.912553 L190.851536,108.912553 L190.851536,86 L202,86 L202,143 Z M202,160 L155,160 L155,150 L202,150 L202,160 Z"
              id="Combined-Shape"
              fill="#111F2F"
              fillRule="nonzero"
            />
            <rect
              id="Rectangle"
              stroke="#111F2F"
              strokeWidth="17"
              x="8.5"
              y="8.5"
              width="228"
              height="228"
            />
          </g>
        </SvgLogo>
      </Link>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
