import { ApolloCache } from "@apollo/client";
import React, { ReactElement, useState } from "react";

import { Button } from "~/atoms/Button";
import { ButtonsGrid } from "~/atoms/ButtonsGrid";
import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { scale } from "~/design";
import { EditPersonMutation, Maybe } from "~/generated/graphql";
import { Company, CompanyCard } from "~/molecules/CompanyCard";
import { EditPerson } from "~/molecules/EditPerson";

type PersonType = {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly age: Maybe<number>;
};

type Underage = PersonType & {
  readonly __typename: "Underage";
};

type Adult = PersonType & {
  readonly __typename: "Adult";
  employers: ReadonlyArray<Company>;
};

export type Person = Underage | Adult;

export type Props<U extends Person = Person> = {
  person: U;
  onDelete?: (person: U) => void;
};

export const PersonCard = ({ person, onDelete }: Props): ReactElement => {
  const [editOpen, setEditOpen] = useState(false);
  const fullName = `${person.firstName} ${person.lastName}`;

  const handleOnDelete = () => {
    if (onDelete) {
      onDelete(person);
    }
  };

  const onEditPerson = (cache: ApolloCache<any>, data: EditPersonMutation) => {
    setEditOpen(false);
  };

  const handleSetEditOpen = () => {
    setEditOpen(!editOpen);
  };

  if (editOpen) {
    return (
      <Card noMargin>
        <Button onClick={handleSetEditOpen}>Close</Button>
        <EditPerson person={person} handleOnEditPerson={onEditPerson} />
      </Card>
    );
  }

  return (
    <Card noMargin>
      <Paragraph>{fullName}</Paragraph>
      <Paragraph>Age: {person.age}</Paragraph>

      {person.__typename === "Adult" && Boolean(person.employers.length) && (
        <div css={{ marginTop: scale(6) }}>
          <Paragraph>Employers:</Paragraph>
          {person.employers.map((employer) => (
            <CompanyCard background key={employer.id} company={employer} />
          ))}
        </div>
      )}
      <ButtonsGrid css={{ display: "grid", justifyContent: "end" }}>
        <Button onClick={handleSetEditOpen}>Edit</Button>
        {onDelete && <Button onClick={handleOnDelete}>Delete</Button>}
      </ButtonsGrid>
    </Card>
  );
};
