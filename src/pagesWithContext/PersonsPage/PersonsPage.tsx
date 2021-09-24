import React from "react";
import { toast } from "react-toastify";

import { Card } from "~/atoms/Card";
import { PageContent } from "~/atoms/PageContent";
import { TwoColumnSection } from "~/atoms/TwoColumnSection";
import { UsersGrid } from "~/atoms/UsersGrid";
import { PersonForm, PersonHandler } from "~/atoms/form/PersonForm";
import { H3 } from "~/atoms/typography/H3";
import {
  useAddPersonMutation,
  useNewestPersonsQuery,
} from "~/generated/graphql";
import { Header } from "~/molecules/Header";
import { PersonCard } from "~/molecules/PersonCard";
import { QueryWrapper } from "~/molecules/QueryWrapper";

export const PersonsPage = () => {
  const personsData = useNewestPersonsQuery({
    onError: () => personAddedFailureToast(),
  });

  const [addPersonMutation] = useAddPersonMutation({
    onCompleted: (data) => {
      if (data.addPerson.__typename === "AddPersonSuccess") {
        personAddedSuccessToast();
        personsData.refetch();
      }
    },
    onError: (error) => {
      personAddedFailureToast(error.message);
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
          <QueryWrapper query={personsData}>
            {({ newestPersons }) => (
              <UsersGrid>
                {newestPersons.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </UsersGrid>
            )}
          </QueryWrapper>
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
