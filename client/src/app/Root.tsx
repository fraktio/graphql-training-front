import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

import { store } from '../setup/redux'
import { AppRoot } from './AppRoot'
import { createApolloClient } from '../setup/apollo'
import { config } from '../config'

const apolloClient = createApolloClient(config)


export function Root() {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <AppRoot />
      </Provider>
    </ApolloProvider>
  )
}
