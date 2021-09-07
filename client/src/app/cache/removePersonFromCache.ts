  import { ApolloClient } from '@apollo/client';

  
  /**
   * Removes item from cache
   * broadcast: false prevents queries to refresh
   */
  export const removePersonFromCache = (client: ApolloClient<object> , uuid: string) => {

    const identity = client.cache.identify({
      __typename: "Adult",
      UUID: uuid,
    })

    client.cache.evict({ id: identity, broadcast: true })
    client.cache.gc()
  }