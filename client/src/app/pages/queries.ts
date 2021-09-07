import { gql } from '@apollo/client';

export const PETS = gql`
  query Pets {
    pets {
      id
      name
    }
  }
`
export const PET = gql`
  query Pet($id: Int!) {
    pet(id: $id) {
      id
      name
    }
  }
`

export const PERSON = gql`
  fragment Person on Adult {
    UUID
    firstName
    lastName
    phone
    birthday
    nationality
    gender
    age @client
  }
`

export const GET_PERSONS = gql`
  ${PERSON}
  query GetPersons {
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

export const ADD_PERSON = gql`
  ${PERSON}
  mutation AddPerson($input: AddPersonInput!) {
    addPerson(input: $input) {
      __typename
      ...on AddPersonSuccess {
        ...Person
      }
      ... on FailureOutput {
        message
        field
      }
    }
  }
`
