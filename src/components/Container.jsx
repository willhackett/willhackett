import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Provider, Block, createGlobalStyle, styled } from 'reakit';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import baseTheme from 'reakit-theme-default';

import breakpoints from './breakpoints';
import Header from './Header';
import Footer from './Footer';

import 'circular-std';

const StyledBlock = styled(Block)`
  margin: auto;
  max-width: 95%;
  ${breakpoints.sm} {
    max-width: 540px;
  }
  ${breakpoints.md} {
    max-width: 720px;
  }
  ${breakpoints.lg} {
    max-width: 960px;
  }
  ${breakpoints.xl} {
    max-width: 1140px;
  }
`;

const mainTheme = {
  ...baseTheme,
  fontFamily: `'CircularStd', sans-serif`
};

const themes = {
  light: {
    ...mainTheme,
    linkColor: '#111F2F',
    bgColor: '#FFFFFF'
  },
  dark: {
    ...mainTheme,
    linkColor: '#FFFFFF',
    bgColor: '#111417'
  }
};

const GlobalStyle = createGlobalStyle`
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  * {
    box-sizing: border-box;
  }
  html, .root {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'CircularStd', sans-serif;
  }
  h1 {
    font-size: 4rem;
    margin: 2rem 0;
  }
  h2 {
    font-size: 2rem;
    line-height: 3rem;
    margin: 1.8rem 0;
  }
  body {
    margin: 0;
    background-color: ${props => props.theme.bgColor};
    font-family: 'CircularStd', sans-serif;
    color: ${props => props.theme.linkColor}
  }
  blockquote {
    font-style: italic;
    border-left: 2px solid ${props => props.theme.linkColor};
    padding-left: 2rem;
    margin-left: 0;
  }
  p {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-block-start: 1.5rem;
    margin-block-end: 1.5rem;
    font-weight: 200;
  }
  p > a {
    text-decoration: none;
    color: ${props => props.theme.linkColor};
    border-bottom: 2px solid ${props => props.theme.linkColor};
    padding-bottom: 2px;
    transition: all 0.25s;
    &:hover {
      padding-bottom: 8px;
      border-bottom: 2px solid transparent;
    }
  }
`;
const Container = ({ children, theme }) => (
  <Provider theme={themes[theme]}>
    <Fragment>
      <GlobalStyle />
      <StyledBlock maxWidth="">
        <StaticQuery
          query={graphql`
            query HeadingQuery {
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
          `}
          render={data => (
            <Fragment>
              <Helmet>
                <html lang="en" />
                <title>{data.site.siteMetadata.title}</title>
                <meta
                  name="description"
                  content={data.site.siteMetadata.description}
                />

                <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/img/apple-touch-icon.png"
                />
                <link
                  rel="icon"
                  type="image/png"
                  href="/img/favicon-32x32.png"
                  sizes="32x32"
                />
                <link
                  rel="icon"
                  type="image/png"
                  href="/img/favicon-16x16.png"
                  sizes="16x16"
                />

                <link
                  rel="mask-icon"
                  href="/img/safari-pinned-tab.svg"
                  color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta
                  property="og:title"
                  content={data.site.siteMetadata.title}
                />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="/img/og-image.jpg" />
              </Helmet>
              <Header />
              {children}
              <Footer />
            </Fragment>
          )}
        />
      </StyledBlock>
    </Fragment>
  </Provider>
);

export default connect(state => ({ theme: state.theme }))(Container);
