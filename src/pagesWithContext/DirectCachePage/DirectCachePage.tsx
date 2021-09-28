/* eslint-disable no-console */
import { gql, useApolloClient, useQuery, ApolloClient } from "@apollo/client";
import faker from "faker";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "~/atoms/Button";
import { ButtonsGrid } from "~/atoms/ButtonsGrid";
import { NotFound } from "~/atoms/NotFound";
import { PageContent } from "~/atoms/PageContent";
import { PetCard } from "~/atoms/PetCard";
import { PetsGrid } from "~/atoms/PetsGrid";
import { Section } from "~/atoms/Section";
import { H3 } from "~/atoms/typography/H3";
import { Header } from "~/molecules/Header";
import { QueryWrapper } from "~/molecules/QueryWrapper";

const PETS_QUERY = gql`
  query Pets {
    pets {
      id
      name
    }
  }
`;

type PetsQuery = {
  pets: Array<{
    id: string;
    name: string;
  }>;
};

const createPet = () => ({
  id: uuidv4(),
  __typename: "Pet",
  name: faker.name.firstName(),
});

export const DirectCachePage = () => {
  const client = useApolloClient();

  const [carbageCollector, setCarbageCollector] = useState(true);
  const handleSetCarbageCollector = () => {
    setCarbageCollector(!carbageCollector);
  };

  useEffect(() => {
    client.writeQuery({
      query: PETS_QUERY,
      data: { pets: [createPet()] },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRemovePetAtPetsQuery = (petId: string) => {
    const petsCache = client.cache.readQuery<PetsQuery>({ query: PETS_QUERY });

    const petsInCache = petsCache?.pets.filter((p) => p.id !== petId);

    client.cache.writeQuery({
      query: PETS_QUERY,
      data: {
        ...petsCache,
        pets: petsInCache,
      },
    });

    if (carbageCollector) {
      client.cache.gc();
    }
  };

  const onEvictPetFromCache = (petId: string) => {
    const identity = client.cache.identify({ id: petId, __typename: "Pet" });
    client.cache.evict({ id: identity, broadcast: true });
    if (carbageCollector) {
      client.cache.gc();
    }
  };

  const handleAddPet = () => {
    const petsData = client.readQuery({
      query: PETS_QUERY,
    });

    const pets = petsData ? petsData.pets : [];

    client.writeQuery({
      query: PETS_QUERY,
      data: {
        pets: [...pets, createPet()],
      },
    });
  };

  const petsQuery = useQuery<PetsQuery>(PETS_QUERY, {
    fetchPolicy: "cache-only",
  });

  return (
    <PageContent isNarrow>
      <Header title="Cache Demo" showBack />

      <Section>
        <H3>Cache only PETS</H3>
        <ButtonsGrid>
          <Button onClick={handleAddPet}>Add pet</Button>
          <span>
            <input
              type="checkbox"
              checked={carbageCollector}
              onChange={handleSetCarbageCollector}
              onClick={handleSetCarbageCollector}
            />
            Use garbage collector
          </span>
        </ButtonsGrid>

        <QueryWrapper query={petsQuery}>
          {({ pets }) =>
            pets.length ? (
              <PetsGrid>
                {pets.map((pet) => (
                  <PetCard
                    key={pet.id}
                    pet={pet}
                    handleRemovePetatPetsQuery={onRemovePetAtPetsQuery}
                    handleEvictPetFromCache={onEvictPetFromCache}
                  />
                ))}
              </PetsGrid>
            ) : (
              <NotFound />
            )
          }
        </QueryWrapper>
      </Section>
    </PageContent>
  );
};
