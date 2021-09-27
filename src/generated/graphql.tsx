import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Country code custom scalar type */
  CountryCode: any;
  /** Cursor for pagination pages */
  Cursor: any;
  /** Date without time or timezone */
  Date: any;
  /** Date and time with offset */
  DateTime: any;
  /** Email custom scalar type */
  Email: any;
  /** PersonalIdentityCode custom scalar type */
  PersonalIdentityCode: any;
  /** Phone scalar type */
  Phone: any;
  StringWithMaxLength50AndMinLength1: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum AccessRight {
  Admin = 'ADMIN',
  User = 'USER'
}

export type AddCompanyInput = {
  company: CompanyInput;
};

export type AddCompanyOutput = AddCompanySuccess;

export type AddCompanySuccess = {
  __typename: 'AddCompanySuccess';
  company: Company;
};

export type AddEmployeeInput = {
  companyId: Scalars['UUID'];
  personId: Scalars['UUID'];
};

export type AddEmployeeOutput = AddEmployeeSuccess;

export type AddEmployeeSuccess = {
  __typename: 'AddEmployeeSuccess';
  company: Company;
};

export type AddPersonInput = {
  person: AddPersonPersonInput;
};

export type AddPersonOutput = AddPersonSuccess | UniqueConstraintViolationFailure;

export type AddPersonPersonInput = {
  birthday: Scalars['Date'];
  email: Scalars['Email'];
  firstName: Scalars['String'];
  gender: Gender;
  /** Last name has to be minimum of 1 chracters and maximum of 50 */
  lastName?: Maybe<Scalars['StringWithMaxLength50AndMinLength1']>;
  nationality: Scalars['CountryCode'];
  personalIdentityCode: Scalars['PersonalIdentityCode'];
  phone: Scalars['Phone'];
};

export type AddPersonSuccess = {
  __typename: 'AddPersonSuccess';
  person: Person;
};

/** Adult is over 16 years old Person */
export type Adult = Person & {
  __typename: 'Adult';
  birthday: Scalars['Date'];
  email: Scalars['Email'];
  employers: Array<Company>;
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['UUID'];
  lastName: Scalars['String'];
  nationality: Scalars['CountryCode'];
  /** Requires authentication and ADMIN privileges */
  personalIdentityCode: Scalars['PersonalIdentityCode'];
  phone?: Maybe<Scalars['Phone']>;
  timestamp: Timestamp;
};

export type AuthenticatedUserFailure = {
  __typename: 'AuthenticatedUserFailure';
  success: Scalars['Boolean'];
};

export type AuthenticatedUserResponse = AuthenticatedUserFailure | AuthenticatedUserSuccess;

export type AuthenticatedUserSuccess = {
  __typename: 'AuthenticatedUserSuccess';
  user: User;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Company = {
  __typename: 'Company';
  employees: Array<Adult>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  timestamp: Timestamp;
};

export type CompanyFailureNotFound = {
  __typename: 'CompanyFailureNotFound';
  success: Scalars['Boolean'];
};

export type CompanyFilterInput = {
  filterOperations?: Maybe<Array<CompanyFilterOperationInput>>;
  nameFilter?: Maybe<StringFilter>;
};

export type CompanyFilterOperationInput = {
  filters?: Maybe<Array<CompanyFilterInput>>;
  operator: FilterOperator;
};

export type CompanyInput = {
  name: Scalars['String'];
};

export type CompanyOutput = CompanyFailureNotFound | CompanySuccess;

export type CompanyQuery = {
  id: Scalars['UUID'];
};

export type CompanySuccess = {
  __typename: 'CompanySuccess';
  company: Company;
};

export type DateFilter = {
  equal?: Maybe<Scalars['Date']>;
  greaterOrEqualThan?: Maybe<Scalars['Date']>;
  greaterThan?: Maybe<Scalars['Date']>;
  lessOrEqualThan?: Maybe<Scalars['Date']>;
  lessThan?: Maybe<Scalars['Date']>;
  notEqual?: Maybe<Scalars['Date']>;
};

export type EditCompanyFailureNotFound = {
  __typename: 'EditCompanyFailureNotFound';
  success?: Maybe<Scalars['Boolean']>;
};

export type EditCompanyInput = {
  company: CompanyInput;
  id: Scalars['UUID'];
};

export type EditCompanyOutput = EditCompanyFailureNotFound | EditCompanySuccess;

export type EditCompanySuccess = {
  __typename: 'EditCompanySuccess';
  company: Company;
};

export type EditPersonInput = {
  id: Scalars['UUID'];
  person: AddPersonPersonInput;
};

export type EditPersonOutput = EditPersonSuccess | NotFoundFailure | UniqueConstraintViolationFailure;

export type EditPersonSuccess = {
  __typename: 'EditPersonSuccess';
  person: Person;
};

export type FailureOutput = {
  field: Scalars['String'];
  message: Scalars['String'];
};

export type File = {
  __typename: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type FileMetadataInvalidFile = FailureOutput & {
  __typename: 'FileMetadataInvalidFile';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FileMetadataResponse = FileMetadataInvalidFile | FileMetadataSuccess;

export type FileMetadataSuccess = {
  __typename: 'FileMetadataSuccess';
  metadata: File;
};

export enum FilterOperator {
  And = 'AND',
  Or = 'OR'
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type InvalidCursorFailure = FailureOutput & {
  __typename: 'InvalidCursorFailure';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginUserFailure = {
  __typename: 'LoginUserFailure';
  success: Scalars['Boolean'];
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginUserResponse = LoginUserFailure | LoginUserSuccess;

export type LoginUserSuccess = {
  __typename: 'LoginUserSuccess';
  user: User;
};

export type Mutation = {
  __typename: 'Mutation';
  addCompany: AddCompanyOutput;
  addEmployee: AddEmployeeOutput;
  /** Creates new person  */
  addPerson: AddPersonOutput;
  editCompany: EditCompanyOutput;
  /** Edit existing person */
  editPerson: EditPersonOutput;
  fileMetadata: FileMetadataResponse;
  login: LoginUserResponse;
  logout: Scalars['Boolean'];
  register: RegisterResponse;
  removeEmployee: RemoveEmployeeOutput;
};


export type MutationAddCompanyArgs = {
  input: AddCompanyInput;
};


export type MutationAddEmployeeArgs = {
  input: AddEmployeeInput;
};


export type MutationAddPersonArgs = {
  input: AddPersonInput;
};


export type MutationEditCompanyArgs = {
  input: EditCompanyInput;
};


export type MutationEditPersonArgs = {
  input: EditPersonInput;
};


export type MutationFileMetadataArgs = {
  file: Scalars['Upload'];
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveEmployeeArgs = {
  input: RemoveEmployeeInput;
};

export type NotFoundFailure = FailureOutput & {
  __typename: 'NotFoundFailure';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type NumberFact = {
  __typename: 'NumberFact';
  fact: Scalars['String'];
  number: Scalars['Int'];
};

export type NumberFactFailure = {
  __typename: 'NumberFactFailure';
  success?: Maybe<Scalars['Boolean']>;
};

export type NumberFactInput = {
  number: Scalars['Int'];
};

export type NumberFactOutput = NumberFactFailure | NumberFactSuccess;

export type NumberFactSuccess = {
  __typename: 'NumberFactSuccess';
  numberFact: NumberFact;
};

export type PageInfo = {
  __typename: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
};

export type PaginationInput = {
  cursor?: Maybe<Scalars['Cursor']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Person = {
  birthday: Scalars['Date'];
  email: Scalars['Email'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['UUID'];
  lastName: Scalars['String'];
  nationality: Scalars['CountryCode'];
  /** Requires authentication and ADMIN privileges */
  personalIdentityCode: Scalars['PersonalIdentityCode'];
  phone?: Maybe<Scalars['Phone']>;
  timestamp: Timestamp;
};

export type PersonFilterInput = {
  birthdayFilter?: Maybe<DateFilter>;
  filterOperations?: Maybe<Array<PersonFilterOperationInput>>;
  nameFilter?: Maybe<StringFilter>;
};

export type PersonFilterOperationInput = {
  filters?: Maybe<Array<PersonFilterInput>>;
  operator: FilterOperator;
};

export type PersonInput = {
  id: Scalars['UUID'];
};

export enum PersonSortField {
  Birthday = 'birthday',
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  LastName = 'lastName'
}

export type PersonSortInput = {
  field: PersonSortField;
  order: SortOrder;
};

export type PersonsPaginationEdge = {
  __typename: 'PersonsPaginationEdge';
  cursor: Scalars['Cursor'];
  node: Person;
};

export type PersonsPaginationOutput = InvalidCursorFailure | PersonsPaginationResponse;

export type PersonsPaginationResponse = {
  __typename: 'PersonsPaginationResponse';
  edges: Array<PersonsPaginationEdge>;
  pageInfo: PageInfo;
};

export type Query = {
  __typename: 'Query';
  authenticatedUser: AuthenticatedUserResponse;
  /** Returns cached person. requires authentication. cahed for 120 seconds */
  cachedPerson: Person;
  companies: Array<Company>;
  company: CompanyOutput;
  /** Returns newest persons as list  */
  newestPersons: Array<Person>;
  numberFact: NumberFactOutput;
  /** Returns person. requires authentication. */
  person: Person;
  /**
   * ### Paginated header result
   *
   * **input arguments**
   * 1. filter
   * 2. sort
   * 3. pagination - mandatory
   */
  persons: PersonsPaginationOutput;
};


export type QueryCachedPersonArgs = {
  input: PersonInput;
};


export type QueryCompaniesArgs = {
  filters?: Maybe<CompanyFilterOperationInput>;
};


export type QueryCompanyArgs = {
  input: CompanyQuery;
};


export type QueryNumberFactArgs = {
  input: NumberFactInput;
};


export type QueryPersonArgs = {
  input: PersonInput;
};


export type QueryPersonsArgs = {
  filters?: Maybe<PersonFilterOperationInput>;
  pagination: PaginationInput;
  sort?: Maybe<Array<PersonSortInput>>;
};

export type RegisterFailure = {
  __typename: 'RegisterFailure';
  success: Scalars['Boolean'];
};

export type RegisterFailureAlreadyExists = {
  __typename: 'RegisterFailureAlreadyExists';
  success: Scalars['Boolean'];
};

export type RegisterInput = {
  email: Scalars['Email'];
  password: Scalars['String'];
  phoneNumber: Scalars['Phone'];
  username: Scalars['String'];
};

export type RegisterResponse = RegisterFailure | RegisterFailureAlreadyExists | RegisterSuccess;

export type RegisterSuccess = {
  __typename: 'RegisterSuccess';
  success: Scalars['Boolean'];
};

export type RemoveEmployeeInput = {
  companyId: Scalars['UUID'];
  personId: Scalars['UUID'];
};

export type RemoveEmployeeOutput = RemoveEmployeeSuccess;

export type RemoveEmployeeSuccess = {
  __typename: 'RemoveEmployeeSuccess';
  company: Company;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringFilter = {
  in?: Maybe<Array<Scalars['String']>>;
  like?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename: 'Subscription';
  personAdded: Person;
};

export type TimeFilter = {
  equal?: Maybe<Scalars['DateTime']>;
  greaterOrEqualThan?: Maybe<Scalars['DateTime']>;
  greaterThan?: Maybe<Scalars['DateTime']>;
  lessOrEqualThan?: Maybe<Scalars['DateTime']>;
  lessThan?: Maybe<Scalars['DateTime']>;
  notEqual?: Maybe<Scalars['DateTime']>;
};

export type Timestamp = {
  __typename: 'Timestamp';
  createdAt: Scalars['DateTime'];
  modifiedAt?: Maybe<Scalars['DateTime']>;
};

/** Underage is under 16 years old Person */
export type Underage = Person & {
  __typename: 'Underage';
  birthday: Scalars['Date'];
  email: Scalars['Email'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['UUID'];
  lastName: Scalars['String'];
  nationality: Scalars['CountryCode'];
  /** Requires authentication and ADMIN privileges */
  personalIdentityCode: Scalars['PersonalIdentityCode'];
  phone?: Maybe<Scalars['Phone']>;
  timestamp: Timestamp;
};

/** Operation fails because some value is not unique */
export type UniqueConstraintViolationFailure = FailureOutput & {
  __typename: 'UniqueConstraintViolationFailure';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type User = {
  __typename: 'User';
  id: Scalars['UUID'];
  username: Scalars['String'];
};

export type AuthenticatedUserFragment = { __typename: 'User', id: any, username: string };

export type AuthenticatedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticatedUserQuery = { __typename: 'Query', authenticatedUser: { __typename: 'AuthenticatedUserFailure', success: boolean } | { __typename: 'AuthenticatedUserSuccess', user: { __typename: 'User', id: any, username: string } } };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename: 'Mutation', login: { __typename: 'LoginUserFailure', success: boolean } | { __typename: 'LoginUserSuccess', user: { __typename: 'User', id: any, username: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename: 'Mutation', logout: boolean };

export type AdultFragment = { __typename: 'Adult', employers: Array<{ __typename: 'Company', id: any, name: string }> };

export type NewestPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewestPersonsQuery = { __typename: 'Query', newestPersons: Array<{ __typename: 'Adult', firstName: string, lastName: string, id: any, birthday: any, employers: Array<{ __typename: 'Company', id: any, name: string }> } | { __typename: 'Underage', firstName: string, lastName: string, id: any, birthday: any }> };

export type AddPersonMutationVariables = Exact<{
  input: AddPersonInput;
}>;


export type AddPersonMutation = { __typename: 'Mutation', addPerson: { __typename: 'AddPersonSuccess', person: { __typename: 'Adult', id: any, firstName: string, lastName: string, birthday: any } | { __typename: 'Underage', id: any, firstName: string, lastName: string, birthday: any } } | { __typename: 'UniqueConstraintViolationFailure', message: string, field: string } };

type Person_Adult_Fragment = { __typename: 'Adult', id: any, firstName: string, lastName: string, birthday: any, employers: Array<{ __typename: 'Company', id: any, name: string }> };

type Person_Underage_Fragment = { __typename: 'Underage', id: any, firstName: string, lastName: string, birthday: any };

export type PersonFragment = Person_Adult_Fragment | Person_Underage_Fragment;

export type PaginatedPersonsQueryVariables = Exact<{
  paginationInput: PaginationInput;
}>;


export type PaginatedPersonsQuery = { __typename: 'Query', persons: { __typename: 'InvalidCursorFailure' } | { __typename: 'PersonsPaginationResponse', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean }, edges: Array<{ __typename: 'PersonsPaginationEdge', cursor: any, node: { __typename: 'Adult', id: any, firstName: string, lastName: string, birthday: any, employers: Array<{ __typename: 'Company', id: any, name: string }> } | { __typename: 'Underage', id: any, firstName: string, lastName: string, birthday: any } }> } };

export const AuthenticatedUserFragmentDoc = gql`
    fragment AuthenticatedUser on User {
  id
  username
}
    `;
export const AdultFragmentDoc = gql`
    fragment Adult on Adult {
  employers {
    id
    name
  }
}
    `;
export const PersonFragmentDoc = gql`
    fragment Person on Person {
  id
  firstName
  lastName
  birthday
  ...Adult
}
    ${AdultFragmentDoc}`;
export const AuthenticatedUserDocument = gql`
    query AuthenticatedUser {
  authenticatedUser {
    ... on AuthenticatedUserSuccess {
      user {
        ...AuthenticatedUser
      }
    }
    ... on AuthenticatedUserFailure {
      success
    }
  }
}
    ${AuthenticatedUserFragmentDoc}`;

/**
 * __useAuthenticatedUserQuery__
 *
 * To run a query within a React component, call `useAuthenticatedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthenticatedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthenticatedUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthenticatedUserQuery(baseOptions?: Apollo.QueryHookOptions<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>(AuthenticatedUserDocument, options);
      }
export function useAuthenticatedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>(AuthenticatedUserDocument, options);
        }
export type AuthenticatedUserQueryHookResult = ReturnType<typeof useAuthenticatedUserQuery>;
export type AuthenticatedUserLazyQueryHookResult = ReturnType<typeof useAuthenticatedUserLazyQuery>;
export type AuthenticatedUserQueryResult = Apollo.QueryResult<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginUserInput!) {
  login(input: $input) {
    ... on LoginUserSuccess {
      user {
        ...AuthenticatedUser
      }
    }
    ... on LoginUserFailure {
      success
    }
  }
}
    ${AuthenticatedUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const NewestPersonsDocument = gql`
    query NewestPersons {
  newestPersons {
    firstName
    lastName
    id
    birthday
    ...Adult
  }
}
    ${AdultFragmentDoc}`;

/**
 * __useNewestPersonsQuery__
 *
 * To run a query within a React component, call `useNewestPersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewestPersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewestPersonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewestPersonsQuery(baseOptions?: Apollo.QueryHookOptions<NewestPersonsQuery, NewestPersonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewestPersonsQuery, NewestPersonsQueryVariables>(NewestPersonsDocument, options);
      }
export function useNewestPersonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewestPersonsQuery, NewestPersonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewestPersonsQuery, NewestPersonsQueryVariables>(NewestPersonsDocument, options);
        }
export type NewestPersonsQueryHookResult = ReturnType<typeof useNewestPersonsQuery>;
export type NewestPersonsLazyQueryHookResult = ReturnType<typeof useNewestPersonsLazyQuery>;
export type NewestPersonsQueryResult = Apollo.QueryResult<NewestPersonsQuery, NewestPersonsQueryVariables>;
export const AddPersonDocument = gql`
    mutation AddPerson($input: AddPersonInput!) {
  addPerson(input: $input) {
    ... on AddPersonSuccess {
      person {
        id
        firstName
        lastName
        birthday
      }
    }
    ... on UniqueConstraintViolationFailure {
      message
      field
    }
  }
}
    `;
export type AddPersonMutationFn = Apollo.MutationFunction<AddPersonMutation, AddPersonMutationVariables>;

/**
 * __useAddPersonMutation__
 *
 * To run a mutation, you first call `useAddPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPersonMutation, { data, loading, error }] = useAddPersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPersonMutation(baseOptions?: Apollo.MutationHookOptions<AddPersonMutation, AddPersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPersonMutation, AddPersonMutationVariables>(AddPersonDocument, options);
      }
export type AddPersonMutationHookResult = ReturnType<typeof useAddPersonMutation>;
export type AddPersonMutationResult = Apollo.MutationResult<AddPersonMutation>;
export type AddPersonMutationOptions = Apollo.BaseMutationOptions<AddPersonMutation, AddPersonMutationVariables>;
export const PaginatedPersonsDocument = gql`
    query PaginatedPersons($paginationInput: PaginationInput!) {
  persons(pagination: $paginationInput) {
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
    ${PersonFragmentDoc}`;

/**
 * __usePaginatedPersonsQuery__
 *
 * To run a query within a React component, call `usePaginatedPersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedPersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedPersonsQuery({
 *   variables: {
 *      paginationInput: // value for 'paginationInput'
 *   },
 * });
 */
export function usePaginatedPersonsQuery(baseOptions: Apollo.QueryHookOptions<PaginatedPersonsQuery, PaginatedPersonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginatedPersonsQuery, PaginatedPersonsQueryVariables>(PaginatedPersonsDocument, options);
      }
export function usePaginatedPersonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginatedPersonsQuery, PaginatedPersonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginatedPersonsQuery, PaginatedPersonsQueryVariables>(PaginatedPersonsDocument, options);
        }
export type PaginatedPersonsQueryHookResult = ReturnType<typeof usePaginatedPersonsQuery>;
export type PaginatedPersonsLazyQueryHookResult = ReturnType<typeof usePaginatedPersonsLazyQuery>;
export type PaginatedPersonsQueryResult = Apollo.QueryResult<PaginatedPersonsQuery, PaginatedPersonsQueryVariables>;