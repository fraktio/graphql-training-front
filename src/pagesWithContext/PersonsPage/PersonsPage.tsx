import React from "react";
import { toast } from "react-toastify";

import { Card } from "~/atoms/Card";
import { PageContent } from "~/atoms/PageContent";
import { TwoColumnSection } from "~/atoms/TwoColumnSection";
import { UsersGrid } from "~/atoms/UsersGrid";
import { PersonForm, PersonHandler } from "~/atoms/form/PersonForm";
import { H1 } from "~/atoms/typography/H1";
import { H3 } from "~/atoms/typography/H3";
import { Person, PersonCard } from "~/molecules/PersonCard";

const persons = [
  {
    UUID: "0",
    firstName: "Harvey",
    lastName: "Leuschke",
  },
  {
    UUID: "1",
    firstName: "Dawn",
    lastName: "Blick",
  },
  {
    UUID: "2",
    firstName: "Donald",
    lastName: "Kris",
  },
  {
    UUID: "3",
    firstName: "Margarita",
    lastName: "Ondricka",
  },
];

export const PersonsPage = () => {
  const handleDeletePerson = (data: Person) => {
    // eslint-disable-next-line no-console
    console.log("onDelete", data);
  };

  const handleAddPerson: PersonHandler = (data, resetForm) => {
    // eslint-disable-next-line no-console
    console.log("onAdd", data);
    personAddedToast();
    resetForm();
  };

  const personAddedToast = () => {
    toast.success("Person added successfully");
  };

  /**
   * const personAddedFailureToast = () => {
   *   toast.error("Failed to add person");
   * };
   */

  return (
    <PageContent>
      <H1>Persons Page</H1>

      <TwoColumnSection>
        <div>
          <H3>Persons</H3>
          <UsersGrid>
            {persons.map((person) => (
              <PersonCard
                key={person.UUID}
                person={person}
                onDelete={handleDeletePerson}
              />
            ))}
          </UsersGrid>
        </div>

        <div>
          <H3>ADD PERSON</H3>
          <Card>
            <PersonForm onPerson={handleAddPerson} />
          </Card>
        </div>
      </TwoColumnSection>
    </PageContent>
  );
};
