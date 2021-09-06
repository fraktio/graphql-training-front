import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { gql, useQuery, useMutation, ApolloError } from '@apollo/client';

import { IndexPage, PersonPage, NotFoundPage } from './pages'
import { Person } from './pages/IndexPage';
import { AddedPerson } from './components/person/AddPersonForm';


const PERSON = gql`
  fragment Person on Adult {
    UUID
    firstName
    lastName
    phone
    birthday
    nationality
    gender
  }
`

const GET_PERSONS = gql`
  ${PERSON}
  query {
    persons(
      pagination: {
        limit: 20
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
           ...Person
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
  const dispatch = useDispatch()

  const handleRemovePerson = (uuid: string) => {
    dispatch({ type: 'REMOVE_PERSON', payload: { uuid } })
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
    return { ...person, age: 0 } as Person
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
