import React from 'react'
import { Link } from 'gatsby'
import { styled } from 'reakit'
import breakpoints from './breakpoints'
import Middle from './Middle'

import { FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'

const FooterContainer = styled('footer')`
  display: flex;
  min-height: 15rem;
  margin: 0;
  flex-direction: column;
  background: ${props => props.theme.footerBg};
  ${breakpoints.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterContent = styled('div')`
  text-align: center;
  margin: 1rem auto;
  color: white;
  ${breakpoints.md} {
    width: 45%;
    text-align: left;
    margin: initial;
  }
`

const SvgLogo = styled('svg')`
  width: 2rem;
  height: 2rem;
`

const FooterLogoLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  margin: 0;
  line-height: 1.7rem;
  font-size: 1.4rem;
  color: white;
`

const FooterMiddle = styled(Middle)`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  ${breakpoints.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const NavLink = styled(Link)`
  display: block;
  font-size: 1.5rem;
  color: white;
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`

const CopyNotice = styled.div`
  display: block;
  font-size: 0.8rem;
  color: white;
  margin: 1rem 0;
`

const SocialLinks = styled.div`
  display: flex;
  font-size: 2rem;
  color: white;
  margin: 1rem 0;
  justify-content: center;
  ${breakpoints.md} {
    justify-content: flex-start;
  }
`

const StyledSocialLink = styled.a`
  padding: 0.3rem;
  color: white;
  transition: color 0.25s;
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`

const SocialLink = props => (
  <StyledSocialLink rel="noopener noreferrer" target="_blank" {...props} />
)

const Footer = () => (
  <FooterContainer>
    <FooterMiddle>
      <FooterContent>
        <FooterLogoLink to="/">Will Hackett</FooterLogoLink>
      </FooterContent>
      <FooterContent>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <SocialLinks>
          <SocialLink
            href="https://www.twitter.com/willhackett/"
            title="Will Hackett on Twitter"
          >
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/willhackett/"
            title="Will Hackett on Linkedin"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://www.medium.com/@willhackett/"
            title="Will Hackett on Medium"
          >
            <FaMedium />
          </SocialLink>
        </SocialLinks>
        <CopyNotice>
          Copyright © Will Hackett, {new Date().getFullYear()}. All Rights
          Reserved.
        </CopyNotice>
      </FooterContent>
    </FooterMiddle>
  </FooterContainer>
)

export default Footer
