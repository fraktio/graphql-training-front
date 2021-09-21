/* eslint-disable no-console */
import { gql, useApolloClient, useQuery, ApolloClient } from "@apollo/client";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "~/atoms/Button";
import { NotFound } from "~/atoms/NotFound";
import { PageContent } from "~/atoms/PageContent";
import { PetCard } from "~/atoms/PetCard";
import { PetsGrid } from "~/atoms/PetsGrid";
import { Section } from "~/atoms/Section";
import { User, UserCard } from "~/atoms/UserCard";
import { UsersGrid } from "~/atoms/UsersGrid";
import { H3 } from "~/atoms/typography/H3";
import { AllPersonsQuery } from "~/generated/graphql";
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

const PERSONS_QUERY = gql`
  query AllPersons {
    allPersons {
      firstName
      lastName
      UUID
    }
  }
`;

export const DirectCachePage = () => {
  const client = useApolloClient();

  useEffect(() => {
    client.writeQuery({
      query: PETS_QUERY,
      data: { pets: [] },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const personsData = useQuery<AllPersonsQuery>(PERSONS_QUERY);
  console.log("NETWORK ONLY DATA", personsData.data);

  // Add refetch()
  // const [deletePerson] = useMutation;

  const personsFromCache = client.readQuery({
    query: PERSONS_QUERY,
  });
  console.log("DIRECTLY READ FROM CACHE", personsFromCache);

  const handleDeletePerson = (user: User) => {
    // Tehävä X, poista käyttääjä cachesta
    removePersonFromCache(client, user.UUID);
  };

  const handleAddPet = () => {
    const petsData = client.readQuery({
      query: PETS_QUERY,
    });

    const pets = petsData ? petsData.pets : [];

    const newPet = {
      uuid: uuidv4(),
      __typename: "Pet",
      name: "Lullake",
    };

    client.writeQuery({
      query: PETS_QUERY,
      data: {
        pets: [...pets, newPet],
      },
    });
  };

  const petsQuery = useQuery<PetsQuery>(PETS_QUERY, {
    fetchPolicy: "cache-only",
  });

  return (
    <PageContent isNarrow>
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

      <H3>Persons directly readed from cache (no remote query)</H3>
      <QueryWrapper query={personsData}>
        {({ allPersons }) => (
          <UsersGrid>
            {allPersons.map((person) => (
              <UserCard
                key={person.UUID}
                user={person}
                onDelete={handleDeletePerson}
              />
            ))}
          </UsersGrid>
        )}
      </QueryWrapper>
    </PageContent>
  );
};
