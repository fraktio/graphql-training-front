import {
  from,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";

import { config } from "~/config";

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const httpLink = new HttpLink({ uri: config.graphqlApiEndpoint });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([httpLink]),
  });

  return client;
};
