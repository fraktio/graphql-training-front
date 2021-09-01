import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { gql, useQuery } from '@apollo/client';

import { IndexPage, PersonPage, NotFoundPage } from './pages'
import { Person } from './pages/IndexPage';

const GET_PERSONS = gql`
  query {
    persons(pagination: {}) {
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


export function App() {

  const dispatch = useDispatch()

  /* OLD WAY: State in redux -> REST

  const { persons, isLoading, isError } = useSelector((state) => state.person)

  useEffect(() => {
    dispatch({ type: 'FETCH_PERSONS' })
  }, [dispatch])

  */
  const handleRemovePerson = (uuid: string) => {
    dispatch({ type: 'REMOVE_PERSON', payload: { uuid } })
  }

  const handleAddPerson = (firstName: string, lastName: string) => {
    dispatch({ type: 'ADD_PERSON', payload: { firstName, lastName } })
  }

  const { loading, error, data } = useQuery(GET_PERSONS);

  console.log(data)


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
