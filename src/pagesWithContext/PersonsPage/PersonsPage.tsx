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
  useAddPersonMutation,
  useNewestPersonsQuery,
} from "~/generated/graphql";
import { Header } from "~/molecules/Header";
import { PersonCard } from "~/molecules/PersonCard";

export const PersonsPage = () => {
  const { loading, data, refetch } = useNewestPersonsQuery({
    onError: () => personAddedFailureToast(),
  });

  const [addPersonMutation] = useAddPersonMutation({
    onCompleted: (data) => {
      if (data.addPerson.__typename === "AddPersonSuccess") {
        personAddedSuccessToast();
        refetch();
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
