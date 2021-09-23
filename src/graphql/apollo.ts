import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { createUploadLink } from "apollo-upload-client";
import { sha256 } from "crypto-hash";

import { config } from "~/config";
import generatedIntrospection from "~/generated/introspection-result";
import { typePolicies } from "~/graphql/typePolicies";

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const uploadLink = createUploadLink({ uri: config.graphqlApiEndpoint });
  const persistedQueriesLink = createPersistedQueryLink({ sha256 });

  const client = new ApolloClient({
    cache: new InMemoryCache({
      possibleTypes: generatedIntrospection.possibleTypes,
      typePolicies: typePolicies,
    }),
    link: persistedQueriesLink.concat(uploadLink),
  });

  return client;
};
