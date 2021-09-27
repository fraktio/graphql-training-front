import { ReactNode, ReactElement } from "react";

import { ApolloProvider } from "~/providers/ApolloProvider";
import { ThemeProvider } from "~/providers/ThemeProvider";
import { ToastProvider } from "~/providers/ToastProvider";

const providers = [ThemeProvider, ToastProvider, ApolloProvider].reverse();

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
