import React from 'react'


import { PersonList } from '../components/person';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_PERSONS, PET, PETS } from './queries';
import { Person } from './IndexPage';
import { removePersonFromCache } from '../cache/removePersonFromCache';
import { Button } from '../components/layout/form/input';
import { v4 as uuidv4 } from 'uuid'


export function DirectCachePage() {
  const client = useApolloClient();


  const { data } = useQuery(GET_PERSONS, { fetchPolicy: 'cache-only' });
  console.log('NETWORK ONLY DATA', data)


  const personsFromCache = client.readQuery({
    query: GET_PERSONS,
  });
  console.log('DIRECTLY READ FROM CACHE', personsFromCache)


  const removePerson = (uuid: string) => {
    removePersonFromCache(client, uuid)
  }

  const persons = (personsFromCache.persons.edges.map((edge: { node: object; }) => {
    const person = { ...edge.node, uuid: edge.node.UUID }
    return { ...person } as Person
  }))

  const addPet = () => {

    const petsData = client.readQuery({
      query: PETS,
    });

    const pets = petsData ? petsData.pets : []

    const newPet = {
      id: uuidv4(),
      __typename: 'Pet',
      name: 'Lullake'
    }

    client.writeQuery({
      query: PETS,
      data: {
        pets: [...pets, newPet]
      }
    })
  }

  const petsQuery = useQuery(PETS, { fetchPolicy: 'cache-only' });

  return (
    <div>
      <div>
        <header>
          <h2>Cache only PETS</h2>
          <Button onClick={addPet}>Add pet</Button>
        </header>

        <ul>
          {petsQuery.data && petsQuery.data.pets.map((pet) => (
            <li>{pet.name} {pet.id}</li>
          ))}
        </ul>

      </div>


      <header>
        <h2>Persons directly readed from cache (no remote query)</h2>
      </header>

      <PersonList persons={persons} showStats onRemovePerson={removePerson} />

    </div>
  )
}
