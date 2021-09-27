import React, { ReactElement } from "react";
import { toast } from "react-toastify";

import { Button } from "~/atoms/Button";
import { Loading } from "~/atoms/Loading";
import { PageContent } from "~/atoms/PageContent";
import { UsersGrid } from "~/atoms/UsersGrid";
import { H3 } from "~/atoms/typography/H3";
import {
  PaginatedPersonsQuery,
  usePaginatedPersonsQuery,
} from "~/generated/graphql";
import { Header } from "~/molecules/Header";
import { PersonCard } from "~/molecules/PersonCard";

export const PaginationPage = () => {
  const limit = 2;

  const { data, error, loading, fetchMore } = usePaginatedPersonsQuery({
    onError: () => toast.error("Failed to load persons"),
    variables: { paginationInput: { limit: limit } },
  });

  const onFetchMore = (cursor: string) => {
    fetchMore({
      variables: {
        paginationInput: {
          cursor: cursor,
          limit: limit,
        },
      },
    });
  };

  return (
    <PageContent>
      <Header title="Pagination example Page" showBack />

      <div>
        <H3>Paginated Persons</H3>
        {loading && <Loading />}
        {error && <div>There were errors in quey</div>}
        {data !== undefined && (
          <PersonPagination
            paginationQuery={data}
            handleFetchMore={onFetchMore}
          />
        )}
      </div>
    </PageContent>
  );
};

type PersonPaginationProps = {
  paginationQuery: PaginatedPersonsQuery;
  handleFetchMore: (cursor: string) => void;
};

const PersonPagination = ({
  paginationQuery,
  handleFetchMore,
}: PersonPaginationProps): ReactElement => {
  const handleFetchMoreButtonClick = () => {
    if (paginationQuery.persons.__typename === "PersonsPaginationResponse") {
      const lastElement =
        paginationQuery.persons.edges[paginationQuery.persons.edges.length - 1];

      handleFetchMore(lastElement.cursor);
    }
  };

  if (paginationQuery.persons.__typename === "InvalidCursorFailure") {
    toast.error("Failed to load persons");

    return <div>cursor failure</div>;
  }

  return (
    <UsersGrid>
      {paginationQuery.persons.edges.map((edge) => (
        <PersonCard key={edge.node.id} person={edge.node} />
      ))}
      <Button onClick={handleFetchMoreButtonClick}>Fetch more</Button>
    </UsersGrid>
  );
};
