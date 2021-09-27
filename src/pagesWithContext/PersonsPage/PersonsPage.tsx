import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { toast } from "react-toastify";

import { Card } from "~/atoms/Card";
import { Loading } from "~/atoms/Loading";
import { NotFound } from "~/atoms/NotFound";
import { PageContent } from "~/atoms/PageContent";
import { TwoColumnSection } from "~/atoms/TwoColumnSection";
import { UsersGrid } from "~/atoms/UsersGrid";
import { PersonForm, PersonHandler } from "~/atoms/form/PersonForm";
import { H3 } from "~/atoms/typography/H3";
import {
  NewestPersonsQuery,
  AddPersonMutation,
  AddPersonMutationVariables,
} from "~/generated/graphql";
import { Header } from "~/molecules/Header";
import { PersonCard } from "~/molecules/PersonCard";

export const NewestPersonsDocument = gql`
  fragment Adult on Adult {
    employers {
      id
      name
    }
  }

  query NewestPersons {
    newestPersons {
      firstName
      lastName
      email
      birthday
      age @client
      ...Adult
    }
  }
`;

export const AddPersonDocument = gql`
  mutation AddPerson($input: AddPersonInput!) {
    addPerson(input: $input) {
      ... on AddPersonSuccess {
        person {
          id
          firstName
          lastName
          birthday
        }
      }
      ... on UniqueConstraintViolationFailure {
        message
        field
      }
    }
  }
`;

export const PersonsPage = () => {
  const { loading, data, refetch } = useQuery<NewestPersonsQuery>(
    NewestPersonsDocument,
  );

  const [addPersonMutation] = useMutation<
    AddPersonMutation,
    AddPersonMutationVariables
  >(AddPersonDocument, {
    onCompleted: (data) => {
      if (data.addPerson.__typename === "AddPersonSuccess") {
        refetch();
      }
    },
  });

  const handleAddPerson: PersonHandler = (data, resetForm) => {
    addPersonMutation({
      variables: {
        input: {
          person: data,
        },
      },
    });
    resetForm();
  };

  const personAddedSuccessToast = () => {
    toast.success("Person added successfully");
  };

  const personAddedFailureToast = (message?: string) => {
    toast.error(`Failed to add person${message ? `: ${message}` : ""}`);
  };

  return (
    <PageContent>
      <Header title="Persons Page" showBack />

      <TwoColumnSection>
        <div>
          <H3>Persons</H3>
          {!loading && data?.newestPersons && (
            <UsersGrid>
              {data.newestPersons.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </UsersGrid>
          )}
          {!loading && data === undefined && <NotFound />}
          {loading && <Loading />}
        </div>

        <div>
          <H3>Add Person</H3>
          <Card>
            <PersonForm onPerson={handleAddPerson} />
          </Card>
        </div>
      </TwoColumnSection>
    </PageContent>
  );
};
