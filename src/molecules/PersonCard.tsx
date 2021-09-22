import React, { ReactElement } from "react";

import { Button } from "~/atoms/Button";
import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { Maybe } from "~/generated/graphql";
import { Company, CompanyCard } from "~/molecules/CompanyCard";

export type Person = {
  UUID: string;
  firstName: string;
  lastName: string;
  age: Maybe<number>;
  employers: Maybe<[Company]>;
};

type Props<U extends Person = Person> = {
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
      {person.employers &&
        person.employers.map((employer) => (
          <CompanyCard key={employer.UUID} company={employer} />
        ))}
    </Card>
  );
};
