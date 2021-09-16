import { QueryResult } from "@apollo/client";
import styled from "@emotion/styled";
import { useCallback, useState, ReactElement } from "react";

import { Button } from "~/atoms/Button";
import { Loading } from "~/atoms/Loading";
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
  query: QueryResult<T>;
  showDataSownWhileLoading?: boolean;
  children: (data: T) => ReactElement;
};

export const QueryWrapper = <T extends unknown>({
  query,
  showDataSownWhileLoading,
  children,
}: Props<T>): ReactElement => {
  const [refetching, setRefetching] = useState<boolean>(false);

  const handleRefetch = useCallback(async () => {
    try {
      setRefetching(true);
      await query.refetch();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(
        "Query has an error, caught in wrapper <QueryWrapper />",
        query.error,
      );
    } finally {
      setRefetching(false);
    }
  }, [query]);

  if (query.error && !refetching) {
    return (
      <ErrorContainer>
        <Paragraph>
          <strong>Unknown error</strong>
        </Paragraph>
        <Button onClick={handleRefetch} css={{ marginTop: scale(2) }}>
          Try again
        </Button>
      </ErrorContainer>
    );
  }

  const isLoading = showDataSownWhileLoading
    ? (query.loading && query.data === undefined) || query.data === undefined
    : query.loading || query.data === undefined;

  if (isLoading) {
    return <Loading />;
  }

  return children(query.data as T);
};
