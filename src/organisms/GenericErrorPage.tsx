import { ReactElement } from "react";

import { Column } from "~/atoms/Column";
import { H2 } from "~/atoms/typography/H2";

type Props = {
  error?: Error;
};

export const GenericErrorPage = ({ error }: Props): ReactElement => (
  <Column center alignCenter>
    <H2>Something went wrong</H2>
    {error && <p>{error.message}</p>}
  </Column>
);
