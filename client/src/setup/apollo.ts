import {
  InMemoryCache,
  // IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'

interface Config {
  GRAPHQL_API_URL: string | undefined
}

export function createApolloClient(config: Config): ApolloClient<{}> {
    /*
  let introspectionQueryResultData

  try {
    introspectionQueryResultData = require('./fragmentTypes.json')
  } catch (e) {
    throw new Error(
      'Fragment types are not generated. You should run: yarn create-fragment-types'
    )
  }

  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
  })

  const cache = new InMemoryCache({ fragmentMatcher })
 */
    const cache = new InMemoryCache()

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        // tslint:disable:no-console
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
        // tslint:enable
      })
    }

    if (networkError) {
      // tslint:disable:no-console
      console.error(`[Network error]: ${networkError}`)
      // tslint:enable
    }
  })
  
  if(!config.GRAPHQL_API_URL) {
      throw new Error(
      'GRAPHQL_API_URL is not defined'
    )
  }

  const httpLink = new HttpLink({ uri: `${config.GRAPHQL_API_URL}/graphql` })

  return new ApolloClient({
    cache,
    link: ApolloLink.from([errorLink, httpLink]), 
  })
}
