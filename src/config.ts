/* eslint-disable no-process-env */

const requireEnv = (env: string | undefined): string => {
  if (!env) {
    throw new Error("Environment variable is missing!");
  }

  return env;
};

export const config = {
  graphqlApiEndpoint: requireEnv(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT),
};
