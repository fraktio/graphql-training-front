import { Component, ReactElement } from "react";

import { GenericErrorPage } from "~/organisms/GenericErrorPage";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error: Error): void {
    this.setState({ hasError: true });

    // eslint-disable-next-line no-console
    console.error("Page crashed, catched in wrapper <ErrorBoundary />", error);
  }

  render(): ReactElement {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <GenericErrorPage />;
    }

    return <>{children}</>;
  }
}
