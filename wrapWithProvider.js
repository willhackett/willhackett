import React from 'react'
import { Provider } from 'react-redux'

import Container from './src/components/Container'

import store from './src/modules/store'

const Root = ({ element }) => (
  <Provider store={store}>
    <Container>
      {element}
    </Container>
  </Provider>
)

export default Root