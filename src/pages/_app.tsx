import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";

import { GlobalStyles } from "~/design";
import { ErrorBoundary } from "~/organisms/ErrorBoundary";
import { Providers } from "~/providers/Providers";

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <ErrorBoundary>
    <Providers>
      <Head>
        <title>Graphql training</title>
      </Head>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </Providers>
  </ErrorBoundary>
);

// eslint-disable-next-line no-restricted-syntax
export default App;
