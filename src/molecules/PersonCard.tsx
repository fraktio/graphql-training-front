import React, { ReactElement } from "react";

import { Button } from "~/atoms/Button";
import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { Maybe } from "~/generated/graphql";
import { Company, CompanyCard } from "~/molecules/CompanyCard";

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
  const fullName = `${person.firstName} ${person.lastName}`;

  const handleOnClick = () => {
    if (onDelete) {
      onDelete(person);
    }
  };

  return (
    <Card noMargin>
      <Paragraph>{fullName}</Paragraph>
      <Paragraph>Age: {person.age}</Paragraph>
      {onDelete && <Button onClick={handleOnClick}>Delete</Button>}
      {person.__typename === "Adult" &&
        person.employers.map((employer) => (
          <CompanyCard key={employer.UUID} company={employer} />
        ))}
    </Card>
  );
};
