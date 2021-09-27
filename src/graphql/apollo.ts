import {
  ApolloClient,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { createUploadLink } from "apollo-upload-client";
import { sha256 } from "crypto-hash";

import { config } from "~/config";
import generatedIntrospection from "~/generated/introspection-result";
import { typePolicies } from "~/graphql/typePolicies/typePolicies";

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const uploadLink = createUploadLink({ uri: config.graphqlApiEndpoint });
  const persistedQueriesLink = createPersistedQueryLink({ sha256 });
  const contentTypeLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      "content-type": "application/json",
    },
  }));

  const client = new ApolloClient({
    credentials: "include",
    cache: new InMemoryCache({
      possibleTypes: generatedIntrospection.possibleTypes,
      typePolicies: typePolicies,
    }),
    link: from([contentTypeLink, persistedQueriesLink, uploadLink]),
  });

  return client;
};
