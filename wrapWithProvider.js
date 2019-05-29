import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { compose, withContext } from 'recompose'
import { subscribeToColorScheme } from 'is-dark'
import { Provider as ThemeProvider, createGlobalStyle, styled } from 'reakit'
import baseTheme from 'reakit-theme-default'
import 'circular-std'
import 'typeface-montserrat'
import 'typeface-libre-baskerville'

import Loader from './src/components/Loader'
import breakpoints from './src/components/breakpoints'
import store, { setTheme } from './src/modules/store'
import { dispatch } from 'rxjs/internal/observable/pairs'

const mainTheme = {
  ...baseTheme,
  fontFamily: `'Montserrat', sans-serif`,
  accentColor: '#F74F9E'
}

const themes = {
  light: {
    ...mainTheme,
    name: 'light',
    linkColor: '#161616',
    headerBg: '#FFFFFF',
    footerBg: '#161616',
    bgColor: '#FFFFFF',
    black: '#161616',
    navLink: '#FFFFFF',
    catColor: '#6E6E6E',
    headerBoxShadow: 'rgba(0,0,0,0.08) 0px 3px 10px',
    lineColor: 'rgba(0,0,0,0.1)'
  },
  dark: {
    ...mainTheme,
    name: 'dark',
    linkColor: '#FFFFFF',
    headerBg: '#161616',
    footerBg: '#1f1e1e',
    bgColor: '#1f1e1e',
    black: '#FFFFFF',
    navLink: '#161616',
    catColor: '#D3D3D3',
    headerBoxShadow: 'none',
    lineColor: 'rgba(255,255,255,0.1)'
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  * {
    box-sizing: border-box;
    transition: color 0.5s, background-color 0.25s;
  }
  html, :root {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
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
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.linkColor}
  }
  blockquote {
    font-style: italic;
    border-left: 2px solid ${props => props.theme.linkColor};
    padding-left: 2rem;
    margin-left: 0;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.linkColor}
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
      color: ${props => props.theme.accentColor};
      transition: color 0.1s !important;
    }
  }
  .grecaptcha-badge {
    display: none !important;
  }
`

const enhancers = compose(
  withContext(
    { renderer: PropTypes.oneOf(['browser', 'ssr']) },
    ({ renderer }) => ({ renderer })
  ),
  connect(state => ({ theme: state.theme }))
)

let subscribedToColorScheme = false

const Main = enhancers(({ children, theme, additional, dispatch }) => {
  useEffect(() => {
    if (!subscribedToColorScheme) {
      subscribeToColorScheme(scheme => {
        dispatch(setTheme(scheme))
      })
      subscribedToColorScheme = true
    }
  })

  return (
    <ThemeProvider theme={themes[theme]}>
      <Fragment>
        {additional}
        <GlobalStyle />
        {children}
        <Loader />
      </Fragment>
    </ThemeProvider>
  )
})

const Root = (renderer, additional) => ({ element }) => (
  <Provider store={store}>
    <Main renderer={renderer} additional={additional}>
      {element}
    </Main>
  </Provider>
)

export default Root
