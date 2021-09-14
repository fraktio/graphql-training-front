import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useApolloClient, useQuery, useMutation, ApolloError } from '@apollo/client';

import { IndexPage, PersonPage, NotFoundPage } from './pages'
import { Person } from './pages/IndexPage';
import { AddedPerson } from './components/person/AddPersonForm';
import { ADD_PERSON, GET_PERSONS } from './pages/queries';
import { DirectCachePage } from './pages/DirectCachePage';
import { removePersonFromCache } from './cache/removePersonFromCache';


export function App() {
  const client = useApolloClient();

  const handleRemovePerson = (uuid: string) => {
    removePersonFromCache(client, uuid)
  }


  const handleMutationError = (error: ApolloError) => {
    console.log('OH NOES ERROR HAPPENED IN ADD PERSON MUTATION!')
    console.log(error)
  }

  const [addPerson, addPersonResponse] = useMutation(ADD_PERSON, { onError: handleMutationError, errorPolicy: 'all' })
  console.log('Person added response', addPersonResponse)

  const handleAddPerson = (newPerson: AddedPerson) => {
    addPerson({
      variables: {
        input: {
          person: newPerson
        }
      }
    })
  }

  const handleQueryError = (error: ApolloError) => {
    console.log('OH NOES ERROR HAPPENED IN PERSONS QUERY!')
    console.log(error)
  }
  const { loading, error, data } = useQuery(GET_PERSONS, { onError: handleQueryError, errorPolicy: 'all' });
  console.log('RECEIVED FIELDS', data)

  const persons = (!loading && !error) ? data.persons.edges.map((edge: { node: object; }) => {
    const person = { ...edge.node, uuid: edge.node.UUID }
    return { ...person } as Person
  }) : []


  return (
    <>
      <header>
        <h1>Welcome to Fraktio's React training!</h1>
      </header>

      {loading && <div>Loading..</div>}

      {(error || addPersonResponse.error) && <div>Oops! Something went wrong.</div>}

      {!loading && !error && (
        <Router>
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>

            <Route path="/directcache">
              <DirectCachePage />
            </Route>

            <Route path="/person/:uuid">
              {(props) => {
                const { match } = props

                if (match?.params.uuid) {
                  const person = persons.find((person) => person.uuid === match.params.uuid)

                  if (person) {
                    return <PersonPage person={person} />
                  }

                  return <NotFoundPage />
                }

                return null
              }}
            </Route>

            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  )
}
