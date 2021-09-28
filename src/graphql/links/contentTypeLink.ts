import { setContext } from "@apollo/client/link/context";

export const contentTypeLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "content-type": "application/json",
  },
}));
