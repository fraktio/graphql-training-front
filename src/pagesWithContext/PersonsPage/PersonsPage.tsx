import { gql } from "@apollo/client";
import React from "react";
import { toast } from "react-toastify";

import { Card } from "~/atoms/Card";
import { PageContent } from "~/atoms/PageContent";
import { TwoColumnSection } from "~/atoms/TwoColumnSection";
import { UsersGrid } from "~/atoms/UsersGrid";
import { PersonForm, PersonHandler } from "~/atoms/form/PersonForm";
import { H3 } from "~/atoms/typography/H3";
import { Header } from "~/molecules/Header";
import { Person, PersonCard } from "~/molecules/PersonCard";

export const NewestPersonsDocument = gql`
  query NewestPersons {
    newestPersons {
      firstName
      lastName
      email
      birthday
      age @client
      ... on Adult {
        employers {
          id
          name
        }
      }
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

const persons: Person[] = [
  {
    __typename: "Adult",
    id: "1",
    firstName: "Firstname",
    lastName: "LastName",
    age: 22,
    employers: [],
  },
];

export const PersonsPage = () => {
  const handleAddPerson: PersonHandler = (data, resetForm) => {
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
          <UsersGrid>
            {persons.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </UsersGrid>
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
