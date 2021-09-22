import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { config } from "~/config";
import generatedIntrospection from "~/generated/introspection-result";
import { typePolicies } from "~/graphql/typePolicies";

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const uploadLink = createUploadLink({ uri: config.graphqlApiEndpoint });

  const client = new ApolloClient({
    cache: new InMemoryCache({
      possibleTypes: generatedIntrospection.possibleTypes,
      typePolicies: typePolicies,
    }),
    link: uploadLink,
  });

  return client;
};
