import React from 'react'
import { Provider } from 'react-redux'

import Layout from './src/components/Base/Layout'

import store from './src/modules/store'

const Root = ({ element }) => (
  <Provider store={store}>
    <Layout>
      {element}
    </Layout>
  </Provider>
)

export default Root