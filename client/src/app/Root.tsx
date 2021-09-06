import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { AppRoot } from './AppRoot'
import { createApolloClient } from '../setup/apollo'
import { config } from '../config'

const apolloClient = createApolloClient(config)


export function Root() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppRoot />
    </ApolloProvider>
  )
}
