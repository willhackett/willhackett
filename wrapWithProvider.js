import React, { Fragment } from 'react';
import { Provider, connect } from 'react-redux';
import {
  Provider as ThemeProvider,
  Block,
  createGlobalStyle,
  styled
} from 'reakit';
import baseTheme from 'reakit-theme-default';
import 'circular-std';

import breakpoints from './src/components/breakpoints';
import store from './src/modules/store';

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

const Main = connect(state => ({ theme: state.theme }))(
  ({ children, theme }) => (
    <ThemeProvider theme={themes[theme]}>
      <Fragment>
        <GlobalStyle />
        <StyledBlock>{children}</StyledBlock>
      </Fragment>
    </ThemeProvider>
  )
);

const Root = ({ element }) => (
  <Provider store={store}>
    <Main>{element}</Main>
  </Provider>
);

export default Root;
