import { QueryResult } from "@apollo/client";
import styled from "@emotion/styled";
import { useCallback, useState, ReactElement } from "react";

import { Button } from "~/atoms/Button";
import { Loading } from "~/atoms/Loading";
import { NotFound } from "~/atoms/NotFound";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { scale } from "~/design";

const ErrorContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  margin: `${scale(2)} 0`,
  padding: `${scale(2)} ${scale(4)}`,
});

type Props<T> = {
  query: QueryResult<T>;
  children: (data: T) => ReactElement;
};

export const QueryWrapper = <T extends unknown>({
  query,
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

  if (query.loading) {
    return <Loading />;
  }

  if (query.data === undefined) {
    return <NotFound />;
  }

  return children(query.data as T);
};
