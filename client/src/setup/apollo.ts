import {
  InMemoryCache,
} from '@apollo/client'
import { ApolloClient } from '@apollo/client'
import { ApolloLink } from '@apollo/client'
//import { onError } from "@apollo/client/link/error";
import { HttpLink } from '@apollo/client'

interface Config {
  GRAPHQL_API_URL: string | undefined
}

export function createApolloClient(config: Config): ApolloClient<{}> {

  const cache = new InMemoryCache()

  if(!config.GRAPHQL_API_URL) {
      throw new Error(
      'GRAPHQL_API_URL is not defined'
    )
  }

  const httpLink = new HttpLink({ uri: `${config.GRAPHQL_API_URL}/graphql` })

  return new ApolloClient({
    cache,
    link: ApolloLink.from([ httpLink]), 
  })
}