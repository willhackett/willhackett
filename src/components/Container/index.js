import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Provider, Block, createGlobalStyle, styled } from 'reakit'

import baseTheme from 'reakit-theme-default'

import breakpoints from '../breakpoints'
import Header from '../Header'

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
`

const mainTheme = {
  ...baseTheme,
  fontFamily: `'Nanum Gothic', sans-serif`,
}

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
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro|Work+Sans');
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Work Sans', sans-serif;
  }
  body {
    background-color: ${props => props.theme.bgColor};
    font-family: 'ABeeZee', sans-serif;
    color: ${props => props.theme.linkColor}
  }
`
const Container = ({ children, theme }) => (
  <Provider theme={themes[theme]}>
    <Fragment>
      <GlobalStyle />
      <StyledBlock maxWidth="">
        <Header />
        {children}
      </StyledBlock>
    </Fragment>
  </Provider>
)

export default connect(state => ({ theme: state.theme }))(Container)