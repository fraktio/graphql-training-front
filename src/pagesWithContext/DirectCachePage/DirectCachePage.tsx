/* eslint-disable no-console */
import { gql, useApolloClient, useQuery, ApolloClient } from "@apollo/client";
import faker from "faker";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "~/atoms/Button";
import { NotFound } from "~/atoms/NotFound";
import { PageContent } from "~/atoms/PageContent";
import { PetCard } from "~/atoms/PetCard";
import { PetsGrid } from "~/atoms/PetsGrid";
import { Section } from "~/atoms/Section";
import { H3 } from "~/atoms/typography/H3";
import { Header } from "~/molecules/Header";
import { QueryWrapper } from "~/molecules/QueryWrapper";

/**
 * Removes item from cache
 * broadcast: false prevents queries to refresh
 */
export const removePersonFromCache = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  client: ApolloClient<object>,
  uuid: string,
) => {
  const identity = client.cache.identify({
    __typename: "Person",
    UUID: uuid,
  });

  client.cache.evict({ id: identity, broadcast: true });
  client.cache.gc();
};

const PETS_QUERY = gql`
  query Pets {
    pets {
      uuid
      name
    }
  }
`;

type PetsQuery = {
  pets: Array<{
    uuid: string;
    name: string;
  }>;
};

const createPet = () => ({
  uuid: uuidv4(),
  __typename: "Pet",
  name: faker.name.firstName(),
});

export const DirectCachePage = () => {
  const client = useApolloClient();

  useEffect(() => {
    client.writeQuery({
      query: PETS_QUERY,
      data: { pets: [createPet()] },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Button onClick={handleAddPet}>Add pet</Button>
        <QueryWrapper query={petsQuery}>
          {({ pets }) =>
            pets.length ? (
              <PetsGrid>
                {pets.map((pet) => (
                  <PetCard key={pet.uuid} pet={pet} />
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
