import { ApolloProvider as ApolloClientProvider } from "@apollo/client";
import { ReactNode, useRef, ReactElement } from "react";

import { createApolloClient } from "~/utils/apollo";

type Props = {
  children: ReactNode;
};

export const ApolloProvider = ({ children }: Props): ReactElement => {
  const client = useRef(createApolloClient());

  return (
    <ApolloClientProvider client={client.current}>
      {children}
    </ApolloClientProvider>
  );
};
