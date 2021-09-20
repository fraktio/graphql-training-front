import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { config } from "~/config";

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const uploadLink = createUploadLink({ uri: config.graphqlApiEndpoint });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: uploadLink,
  });

  return client;
};
