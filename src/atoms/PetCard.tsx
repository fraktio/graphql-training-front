import { ReactElement } from "react";

import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";

export type Pet = {
  uuid: string;
  name: string;
};

type Props = {
  pet: Pet;
};

export const PetCard = ({ pet }: Props): ReactElement => {
  const fullName = `${pet.name} ${pet.uuid}`;

  return (
    <Card noMargin>
      <Paragraph>{fullName}</Paragraph>
    </Card>
  );
};
