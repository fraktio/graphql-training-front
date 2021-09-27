import { MutationResult } from "@apollo/client";
import styled from "@emotion/styled";
import { ReactElement } from "react";

import { Loading } from "~/atoms/Loading";
import { NotFound } from "~/atoms/NotFound";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { scale } from "~/design";

const ErrorContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  margin: `${scale(2)} 0`,
  padding: `${scale(2)} ${scale(4)}`,
  backgroundColor: theme.colors.card,
}));

type Props<T> = {
  mutation: MutationResult<T>;
  children: (data: T) => ReactElement;
};

export const MutationWrapper = <T extends unknown>({
  mutation,
  children,
}: Props<T>): ReactElement => {
  if (mutation.error) {
    return (
      <ErrorContainer>
        <Paragraph>
          <strong>Unknown error</strong>
        </Paragraph>
      </ErrorContainer>
    );
  }

  if (mutation.loading) {
    return <Loading />;
  }
  if (mutation.data === undefined) {
    return <NotFound />;
  }

  return children(mutation.data as T);
};
