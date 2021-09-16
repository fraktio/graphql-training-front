import { ReactNode, ReactElement } from "react";

import { ApolloProvider } from "~/providers/ApolloProvider";
import { ThemeProvider } from "~/providers/ThemeProvider";

const providers = [ApolloProvider, ThemeProvider].reverse();

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props): ReactElement => (
  <>
    {providers.reduce<ReactNode>(
      (acc, Curr) => (
        <Curr>{acc}</Curr>
      ),
      children,
    )}
  </>
);
