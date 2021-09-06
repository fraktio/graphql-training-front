import React from 'react'


import { PersonList } from '../components/person';
import { useApolloClient } from '@apollo/client';
import { GET_PERSONS } from './queries';
import { Person } from './IndexPage';


export function DirectCachePage() {
  const client = useApolloClient();


  console.log('ACCESSING CACHE')

  const personsFromCache = client.readQuery({
    query: GET_PERSONS,

  });
  console.log('DIRECTLY READ FROM CACHE', personsFromCache)


  const persons = (personsFromCache.persons.edges.map((edge: { node: object; }) => {
    const person = { ...edge.node, uuid: edge.node.UUID }
    return { ...person } as Person
  }))

  return (
    <div>
      <header>
        <h2>Persons directly readed from cache</h2>
      </header>

      <PersonList persons={persons} showStats onRemovePerson={() => { }} />


    </div>
  )
}
