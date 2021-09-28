import { ReactElement } from "react";

import { Button } from "~/atoms/Button";
import { ButtonsGrid } from "~/atoms/ButtonsGrid";
import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";

export type Pet = {
  id: string;
  name: string;
};

type Props = {
  pet: Pet;
  handleRemovePetatPetsQuery: (petId: string) => void;
  handleEvictPetFromCache: (petId: string) => void;
};

export const PetCard = ({
  pet,
  handleRemovePetatPetsQuery,
  handleEvictPetFromCache,
}: Props): ReactElement => {
  const fullName = `${pet.name} ${pet.id}`;

  return (
    <Card noMargin>
      <Paragraph>{fullName}</Paragraph>
      <ButtonsGrid>
        <Button onClick={() => handleRemovePetatPetsQuery(pet.id)}>
          Remove Pet from pets query
        </Button>
        <Button onClick={() => handleEvictPetFromCache(pet.id)}>
          Evict Pet from cache
        </Button>
      </ButtonsGrid>
    </Card>
  );
};
