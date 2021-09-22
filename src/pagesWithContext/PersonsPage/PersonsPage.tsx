import React from "react";

import { Card } from "~/atoms/Card";
import { PageContent } from "~/atoms/PageContent";
import { TwoColumnSection } from "~/atoms/TwoColumnSection";
import { User, UserCard } from "~/atoms/UserCard";
import { UsersGrid } from "~/atoms/UsersGrid";
import { PersonForm, PersonFormValues } from "~/atoms/form/PersonForm";
import { H1 } from "~/atoms/typography/H1";
import { H3 } from "~/atoms/typography/H3";

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
  const handleDeletePerson = (data: User) => {
    // eslint-disable-next-line no-console
    console.log("onDelete", data);
  };

  const handleAddPerson = (data: PersonFormValues) => {
    // eslint-disable-next-line no-console
    console.log("onAdd", data);
  };

  return (
    <PageContent>
      <H1>Persons Page</H1>

      <TwoColumnSection>
        <div>
          <H3>Persons</H3>
          <UsersGrid>
            {persons.map((person) => (
              <UserCard
                key={person.UUID}
                user={person}
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
