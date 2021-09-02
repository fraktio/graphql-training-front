import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { gql, useQuery, useMutation } from '@apollo/client';

import { IndexPage, PersonPage, NotFoundPage } from './pages'
import { Person } from './pages/IndexPage';
import { AddedPerson } from './components/person/AddPersonForm';

const GET_PERSONS = gql`
  query {
    persons(
      pagination: {
        limit: 200
      }
      sort: [{ field: createdAt, order: DESC }, { field: lastName, order: ASC }]
    ) {
      ... on PersonsPaginationResponse {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            UUID
            firstName
            lastName
            birthday
            nationality
            gender
          }
        }
      }
    }
  }
`

const ADD_PERSON = gql`
  mutation AddPerson($input: AddPersonInput!) {
    addPerson(input: $input) {
      __typename
      ...on AddPersonSuccess {
        person {
          firstName
          lastName
        }
      }
      ... on FailureOutput {
        message
        field
      }
    }
  }
`


export function App() {

  const [addPerson, addPersonResponse] = useMutation(ADD_PERSON,)

  console.log('Person added response', addPersonResponse)

  const dispatch = useDispatch()

  const handleRemovePerson = (uuid: string) => {
    dispatch({ type: 'REMOVE_PERSON', payload: { uuid } })
  }

  const handleAddPerson = (newPerson: AddedPerson) => {
    addPerson({
      variables: {
        input: {
          person: newPerson
        }
      }
    })
  }


  const { loading, error, data } = useQuery(GET_PERSONS);

  const persons = !loading ? data.persons.edges.map((edge: { node: object; }) => {
    const person = { ...edge.node }
    return { ...person, age: 0 } as Person
  }) : []


  return (
    <>
      <header>
        <h1>Welcome to Fraktio's React training!</h1>
      </header>

      {loading && <div>Loading..</div>}

      {error && <div>Oops! Something went wrong.</div>}

      {!loading && !error && (
        <Router>
          <Switch>
            <Route exact path="/">
              <IndexPage
                persons={persons}
                onAddPerson={handleAddPerson}
                onRemovePerson={handleRemovePerson}
              />
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
