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
  readonly company: CompanyInput;
};

export type AddCompanyOutput = AddCompanySuccess;

export type AddCompanySuccess = {
  readonly __typename: 'AddCompanySuccess';
  readonly company: Company;
};

export type AddEmployeeInput = {
  readonly companyId: Scalars['UUID'];
  readonly personId: Scalars['UUID'];
};

export type AddEmployeeOutput = AddEmployeeSuccess;

export type AddEmployeeSuccess = {
  readonly __typename: 'AddEmployeeSuccess';
  readonly company: Company;
};

export type AddPersonInput = {
  readonly person: MutatePersonInput;
};

export type AddPersonOutput = AddPersonSuccess | UniqueConstraintViolationFailure;

export type AddPersonSuccess = {
  readonly __typename: 'AddPersonSuccess';
  readonly person: Person;
};

/** Adult is over 16 years old Person */
export type Adult = Person & {
  readonly __typename: 'Adult';
  readonly age: Maybe<Scalars['Int']>;
  readonly birthday: Scalars['Date'];
  readonly email: Scalars['Email'];
  readonly employers: ReadonlyArray<Company>;
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  readonly id: Scalars['UUID'];
  /** Requires authentication and ADMIN privileges */
  readonly internalId: Scalars['ID'];
  readonly lastName: Scalars['String'];
  readonly nationality: Scalars['CountryCode'];
  /** Requires authentication and USER privileges */
  readonly personalIdentityCode: Scalars['PersonalIdentityCode'];
  readonly phone: Maybe<Scalars['Phone']>;
  readonly timestamp: Timestamp;
};

export type AuthenticatedUserFailure = {
  readonly __typename: 'AuthenticatedUserFailure';
  readonly success: Scalars['Boolean'];
};

export type AuthenticatedUserResponse = AuthenticatedUserFailure | AuthenticatedUserSuccess;

export type AuthenticatedUserSuccess = {
  readonly __typename: 'AuthenticatedUserSuccess';
  readonly user: User;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Company = {
  readonly __typename: 'Company';
  readonly employees: ReadonlyArray<Adult>;
  readonly id: Scalars['UUID'];
  readonly name: Scalars['String'];
  readonly timestamp: Timestamp;
};

export type CompanyFailureNotFound = {
  readonly __typename: 'CompanyFailureNotFound';
  readonly success: Scalars['Boolean'];
};

export type CompanyFilterInput = {
  readonly filterOperations: Maybe<ReadonlyArray<CompanyFilterOperationInput>>;
  readonly nameFilter: Maybe<StringFilter>;
};

export type CompanyFilterOperationInput = {
  readonly filters: Maybe<ReadonlyArray<CompanyFilterInput>>;
  readonly operator: FilterOperator;
};

export type CompanyInput = {
  readonly name: Scalars['String'];
};

export type CompanyOutput = CompanyFailureNotFound | CompanySuccess;

export type CompanyQuery = {
  readonly id: Scalars['UUID'];
};

export type CompanySuccess = {
  readonly __typename: 'CompanySuccess';
  readonly company: Company;
};

export type DateFilter = {
  readonly equal: Maybe<Scalars['Date']>;
  readonly greaterOrEqualThan: Maybe<Scalars['Date']>;
  readonly greaterThan: Maybe<Scalars['Date']>;
  readonly lessOrEqualThan: Maybe<Scalars['Date']>;
  readonly lessThan: Maybe<Scalars['Date']>;
  readonly notEqual: Maybe<Scalars['Date']>;
};

export type EditCompanyFailureNotFound = {
  readonly __typename: 'EditCompanyFailureNotFound';
  readonly success: Maybe<Scalars['Boolean']>;
};

export type EditCompanyInput = {
  readonly company: CompanyInput;
  readonly id: Scalars['UUID'];
};

export type EditCompanyOutput = EditCompanyFailureNotFound | EditCompanySuccess;

export type EditCompanySuccess = {
  readonly __typename: 'EditCompanySuccess';
  readonly company: Company;
};

export type EditPersonInput = {
  readonly id: Scalars['UUID'];
  readonly person: MutatePersonInput;
};

export type EditPersonOutput = EditPersonSuccess | NotFoundFailure | UniqueConstraintViolationFailure;

export type EditPersonSuccess = {
  readonly __typename: 'EditPersonSuccess';
  readonly person: Person;
};

export type FailureOutput = {
  readonly field: Scalars['String'];
  readonly message: Scalars['String'];
};

export type File = {
  readonly __typename: 'File';
  readonly encoding: Scalars['String'];
  readonly filename: Scalars['String'];
  readonly mimetype: Scalars['String'];
};

export type FileMetadataInvalidFile = FailureOutput & {
  readonly __typename: 'FileMetadataInvalidFile';
  readonly field: Scalars['String'];
  readonly message: Scalars['String'];
};

export type FileMetadataResponse = FileMetadataInvalidFile | FileMetadataSuccess;

export type FileMetadataSuccess = {
  readonly __typename: 'FileMetadataSuccess';
  readonly metadata: File;
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
  readonly __typename: 'InvalidCursorFailure';
  readonly field: Scalars['String'];
  readonly message: Scalars['String'];
};

export type LoginUserFailure = {
  readonly __typename: 'LoginUserFailure';
  readonly success: Scalars['Boolean'];
};

export type LoginUserInput = {
  readonly password: Scalars['String'];
  readonly username: Scalars['String'];
};

export type LoginUserResponse = LoginUserFailure | LoginUserSuccess;

export type LoginUserSuccess = {
  readonly __typename: 'LoginUserSuccess';
  readonly token: Scalars['String'];
  readonly user: User;
};

export type MutatePersonInput = {
  readonly birthday: Scalars['Date'];
  readonly email: Scalars['Email'];
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  /** Last name has to be minimum of 1 chracters and maximum of 50 */
  readonly lastName: Maybe<Scalars['StringWithMaxLength50AndMinLength1']>;
  readonly nationality: Scalars['CountryCode'];
  readonly personalIdentityCode: Scalars['PersonalIdentityCode'];
  readonly phone: Scalars['Phone'];
};

export type Mutation = {
  readonly __typename: 'Mutation';
  readonly addCompany: AddCompanyOutput;
  readonly addEmployee: AddEmployeeOutput;
  /** Creates new person  */
  readonly addPerson: AddPersonOutput;
  readonly editCompany: EditCompanyOutput;
  /** Edit existing person */
  readonly editPerson: EditPersonOutput;
  readonly fileMetadata: FileMetadataResponse;
  readonly login: LoginUserResponse;
  readonly logout: Scalars['Boolean'];
  readonly register: RegisterResponse;
  readonly removeEmployee: RemoveEmployeeOutput;
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
  readonly __typename: 'NotFoundFailure';
  readonly field: Scalars['String'];
  readonly message: Scalars['String'];
};

export type NumberFact = {
  readonly __typename: 'NumberFact';
  readonly fact: Scalars['String'];
  readonly number: Scalars['Int'];
};

export type NumberFactFailure = {
  readonly __typename: 'NumberFactFailure';
  readonly success: Maybe<Scalars['Boolean']>;
};

export type NumberFactInput = {
  readonly number: Scalars['Int'];
};

export type NumberFactOutput = NumberFactFailure | NumberFactSuccess;

export type NumberFactSuccess = {
  readonly __typename: 'NumberFactSuccess';
  readonly numberFact: NumberFact;
};

export type PageInfo = {
  readonly __typename: 'PageInfo';
  readonly hasNextPage: Scalars['Boolean'];
};

export type PaginationInput = {
  readonly cursor: Maybe<Scalars['Cursor']>;
  readonly limit: Maybe<Scalars['Int']>;
};

export type Person = {
  readonly age: Maybe<Scalars['Int']>;
  readonly birthday: Scalars['Date'];
  readonly email: Scalars['Email'];
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  readonly id: Scalars['UUID'];
  /** Requires authentication and ADMIN privileges */
  readonly internalId: Scalars['ID'];
  readonly lastName: Scalars['String'];
  readonly nationality: Scalars['CountryCode'];
  /** Requires authentication and USER privileges */
  readonly personalIdentityCode: Scalars['PersonalIdentityCode'];
  readonly phone: Maybe<Scalars['Phone']>;
  readonly timestamp: Timestamp;
};

export type PersonFilterInput = {
  readonly birthdayFilter: Maybe<DateFilter>;
  readonly filterOperations: Maybe<ReadonlyArray<PersonFilterOperationInput>>;
  readonly nameFilter: Maybe<StringFilter>;
};

export type PersonFilterOperationInput = {
  readonly filters: Maybe<ReadonlyArray<PersonFilterInput>>;
  readonly operator: FilterOperator;
};

export type PersonInput = {
  readonly id: Scalars['UUID'];
};

export enum PersonSortField {
  Birthday = 'birthday',
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  LastName = 'lastName'
}

export type PersonSortInput = {
  readonly field: PersonSortField;
  readonly order: SortOrder;
};

export type PersonsPaginationEdge = {
  readonly __typename: 'PersonsPaginationEdge';
  readonly cursor: Scalars['Cursor'];
  readonly node: Person;
};

export type PersonsPaginationOutput = InvalidCursorFailure | PersonsPaginationResponse;

export type PersonsPaginationResponse = {
  readonly __typename: 'PersonsPaginationResponse';
  readonly edges: ReadonlyArray<PersonsPaginationEdge>;
  readonly pageInfo: PageInfo;
};

export type Query = {
  readonly __typename: 'Query';
  readonly authenticatedUser: AuthenticatedUserResponse;
  /** Returns cached person. requires authentication. cahed for 120 seconds */
  readonly cachedPerson: Person;
  readonly companies: ReadonlyArray<Company>;
  readonly company: CompanyOutput;
  /** Returns newest persons as list  */
  readonly newestPersons: ReadonlyArray<Person>;
  readonly numberFact: NumberFactOutput;
  /** Returns person. requires authentication. */
  readonly person: Person;
  /**
   * ### Paginated header result
   *
   * **input arguments**
   * 1. filter
   * 2. sort
   * 3. pagination - mandatory
   */
  readonly persons: PersonsPaginationOutput;
};


export type QueryCachedPersonArgs = {
  input: PersonInput;
};


export type QueryCompaniesArgs = {
  filters: Maybe<CompanyFilterOperationInput>;
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
  filters: Maybe<PersonFilterOperationInput>;
  pagination: PaginationInput;
  sort: Maybe<ReadonlyArray<PersonSortInput>>;
};

export type RegisterFailure = {
  readonly __typename: 'RegisterFailure';
  readonly success: Scalars['Boolean'];
};

export type RegisterFailureAlreadyExists = {
  readonly __typename: 'RegisterFailureAlreadyExists';
  readonly success: Scalars['Boolean'];
};

export type RegisterInput = {
  readonly email: Scalars['Email'];
  readonly password: Scalars['String'];
  readonly phoneNumber: Scalars['Phone'];
  readonly username: Scalars['String'];
};

export type RegisterResponse = RegisterFailure | RegisterFailureAlreadyExists | RegisterSuccess;

export type RegisterSuccess = {
  readonly __typename: 'RegisterSuccess';
  readonly success: Scalars['Boolean'];
};

export type RemoveEmployeeInput = {
  readonly companyId: Scalars['UUID'];
  readonly personId: Scalars['UUID'];
};

export type RemoveEmployeeOutput = RemoveEmployeeSuccess;

export type RemoveEmployeeSuccess = {
  readonly __typename: 'RemoveEmployeeSuccess';
  readonly company: Company;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringFilter = {
  readonly in: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly like: Maybe<Scalars['String']>;
};

export type Subscription = {
  readonly __typename: 'Subscription';
  readonly personAdded: Person;
};

export type TimeFilter = {
  readonly equal: Maybe<Scalars['DateTime']>;
  readonly greaterOrEqualThan: Maybe<Scalars['DateTime']>;
  readonly greaterThan: Maybe<Scalars['DateTime']>;
  readonly lessOrEqualThan: Maybe<Scalars['DateTime']>;
  readonly lessThan: Maybe<Scalars['DateTime']>;
  readonly notEqual: Maybe<Scalars['DateTime']>;
};

export type Timestamp = {
  readonly __typename: 'Timestamp';
  readonly createdAt: Scalars['DateTime'];
  readonly modifiedAt: Maybe<Scalars['DateTime']>;
};

/** Underage is under 16 years old Person */
export type Underage = Person & {
  readonly __typename: 'Underage';
  readonly age: Maybe<Scalars['Int']>;
  readonly birthday: Scalars['Date'];
  readonly email: Scalars['Email'];
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  readonly id: Scalars['UUID'];
  /** Requires authentication and ADMIN privileges */
  readonly internalId: Scalars['ID'];
  readonly lastName: Scalars['String'];
  readonly nationality: Scalars['CountryCode'];
  /** Requires authentication and USER privileges */
  readonly personalIdentityCode: Scalars['PersonalIdentityCode'];
  readonly phone: Maybe<Scalars['Phone']>;
  readonly timestamp: Timestamp;
};

/** Operation fails because some value is not unique */
export type UniqueConstraintViolationFailure = FailureOutput & {
  readonly __typename: 'UniqueConstraintViolationFailure';
  readonly field: Scalars['String'];
  readonly message: Scalars['String'];
};

export type User = {
  readonly __typename: 'User';
  readonly id: Scalars['UUID'];
  readonly username: Scalars['String'];
};

export type AuthenticatedUserFragment = { readonly __typename: 'User', readonly id: any, readonly username: string };

export type AuthenticatedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticatedUserQuery = { readonly __typename: 'Query', readonly authenticatedUser: { readonly __typename: 'AuthenticatedUserFailure', readonly success: boolean } | { readonly __typename: 'AuthenticatedUserSuccess', readonly user: { readonly __typename: 'User', readonly id: any, readonly username: string } } };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { readonly __typename: 'Mutation', readonly login: { readonly __typename: 'LoginUserFailure', readonly success: boolean } | { readonly __typename: 'LoginUserSuccess', readonly token: string, readonly user: { readonly __typename: 'User', readonly id: any, readonly username: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { readonly __typename: 'Mutation', readonly logout: boolean };

export type AdultFragment = { readonly __typename: 'Adult', readonly employers: ReadonlyArray<{ readonly __typename: 'Company', readonly id: any, readonly name: string }> };

export type NewestPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewestPersonsQuery = { readonly __typename: 'Query', readonly newestPersons: ReadonlyArray<{ readonly __typename: 'Adult', readonly firstName: string, readonly lastName: string, readonly id: any, readonly birthday: any, readonly age: Maybe<number>, readonly employers: ReadonlyArray<{ readonly __typename: 'Company', readonly id: any, readonly name: string }> } | { readonly __typename: 'Underage', readonly firstName: string, readonly lastName: string, readonly id: any, readonly birthday: any, readonly age: Maybe<number> }> };

export type AddPersonMutationVariables = Exact<{
  input: AddPersonInput;
}>;


export type AddPersonMutation = { readonly __typename: 'Mutation', readonly addPerson: { readonly __typename: 'AddPersonSuccess', readonly person: { readonly __typename: 'Adult', readonly id: any, readonly firstName: string, readonly lastName: string, readonly birthday: any } | { readonly __typename: 'Underage', readonly id: any, readonly firstName: string, readonly lastName: string, readonly birthday: any } } | { readonly __typename: 'UniqueConstraintViolationFailure', readonly message: string, readonly field: string } };

type FullPerson_Adult_Fragment = { readonly __typename: 'Adult', readonly id: any, readonly firstName: string, readonly lastName: string, readonly phone: Maybe<any>, readonly email: any, readonly nationality: any, readonly birthday: any, readonly gender: Gender, readonly personalIdentityCode: any };

type FullPerson_Underage_Fragment = { readonly __typename: 'Underage', readonly id: any, readonly firstName: string, readonly lastName: string, readonly phone: Maybe<any>, readonly email: any, readonly nationality: any, readonly birthday: any, readonly gender: Gender, readonly personalIdentityCode: any };

export type FullPersonFragment = FullPerson_Adult_Fragment | FullPerson_Underage_Fragment;

export type PersonQueryVariables = Exact<{
  input: PersonInput;
}>;


export type PersonQuery = { readonly __typename: 'Query', readonly person: { readonly __typename: 'Adult', readonly id: any, readonly firstName: string, readonly lastName: string, readonly phone: Maybe<any>, readonly email: any, readonly nationality: any, readonly birthday: any, readonly gender: Gender, readonly personalIdentityCode: any } | { readonly __typename: 'Underage', readonly id: any, readonly firstName: string, readonly lastName: string, readonly phone: Maybe<any>, readonly email: any, readonly nationality: any, readonly birthday: any, readonly gender: Gender, readonly personalIdentityCode: any } };

export type EditPersonMutationVariables = Exact<{
  input: EditPersonInput;
}>;


export type EditPersonMutation = { readonly __typename: 'Mutation', readonly editPerson: { readonly __typename: 'EditPersonSuccess', readonly person: { readonly __typename: 'Adult', readonly id: any, readonly firstName: string, readonly lastName: string, readonly phone: Maybe<any>, readonly email: any, readonly nationality: any, readonly birthday: any, readonly gender: Gender, readonly personalIdentityCode: any } | { readonly __typename: 'Underage', readonly id: any, readonly firstName: string, readonly lastName: string, readonly phone: Maybe<any>, readonly email: any, readonly nationality: any, readonly birthday: any, readonly gender: Gender, readonly personalIdentityCode: any } } | { readonly __typename: 'NotFoundFailure' } | { readonly __typename: 'UniqueConstraintViolationFailure', readonly message: string, readonly field: string } };

type PaginatedPerson_Adult_Fragment = { readonly __typename: 'Adult', readonly id: any, readonly firstName: string, readonly lastName: string, readonly birthday: any, readonly age: Maybe<number>, readonly employers: ReadonlyArray<{ readonly __typename: 'Company', readonly id: any, readonly name: string }> };

type PaginatedPerson_Underage_Fragment = { readonly __typename: 'Underage', readonly id: any, readonly firstName: string, readonly lastName: string, readonly birthday: any, readonly age: Maybe<number> };

export type PaginatedPersonFragment = PaginatedPerson_Adult_Fragment | PaginatedPerson_Underage_Fragment;

export type PaginatedPersonsQueryVariables = Exact<{
  paginationInput: PaginationInput;
}>;


export type PaginatedPersonsQuery = { readonly __typename: 'Query', readonly persons: { readonly __typename: 'InvalidCursorFailure' } | { readonly __typename: 'PersonsPaginationResponse', readonly pageInfo: { readonly __typename: 'PageInfo', readonly hasNextPage: boolean }, readonly edges: ReadonlyArray<{ readonly __typename: 'PersonsPaginationEdge', readonly cursor: any, readonly node: { readonly __typename: 'Adult', readonly id: any, readonly firstName: string, readonly lastName: string, readonly birthday: any, readonly age: Maybe<number>, readonly employers: ReadonlyArray<{ readonly __typename: 'Company', readonly id: any, readonly name: string }> } | { readonly __typename: 'Underage', readonly id: any, readonly firstName: string, readonly lastName: string, readonly birthday: any, readonly age: Maybe<number> } }> } };

export const AuthenticatedUserFragmentDoc = gql`
    fragment AuthenticatedUser on User {
  id
  username
}
    `;
export const FullPersonFragmentDoc = gql`
    fragment FullPerson on Person {
  id
  firstName
  lastName
  phone
  email
  nationality
  birthday
  gender
  personalIdentityCode
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
export const PaginatedPersonFragmentDoc = gql`
    fragment PaginatedPerson on Person {
  id
  firstName
  lastName
  birthday
  age @client
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
      token
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
    age @client
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
export const PersonDocument = gql`
    query Person($input: PersonInput!) {
  person(input: $input) {
    ...FullPerson
  }
}
    ${FullPersonFragmentDoc}`;

/**
 * __usePersonQuery__
 *
 * To run a query within a React component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePersonQuery(baseOptions: Apollo.QueryHookOptions<PersonQuery, PersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
      }
export function usePersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
        }
export type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export type PersonQueryResult = Apollo.QueryResult<PersonQuery, PersonQueryVariables>;
export const EditPersonDocument = gql`
    mutation EditPerson($input: EditPersonInput!) {
  editPerson(input: $input) {
    ... on EditPersonSuccess {
      person {
        ...FullPerson
      }
    }
    ... on UniqueConstraintViolationFailure {
      message
      field
    }
  }
}
    ${FullPersonFragmentDoc}`;
export type EditPersonMutationFn = Apollo.MutationFunction<EditPersonMutation, EditPersonMutationVariables>;

/**
 * __useEditPersonMutation__
 *
 * To run a mutation, you first call `useEditPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPersonMutation, { data, loading, error }] = useEditPersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditPersonMutation(baseOptions?: Apollo.MutationHookOptions<EditPersonMutation, EditPersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPersonMutation, EditPersonMutationVariables>(EditPersonDocument, options);
      }
export type EditPersonMutationHookResult = ReturnType<typeof useEditPersonMutation>;
export type EditPersonMutationResult = Apollo.MutationResult<EditPersonMutation>;
export type EditPersonMutationOptions = Apollo.BaseMutationOptions<EditPersonMutation, EditPersonMutationVariables>;
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
          ...PaginatedPerson
        }
      }
    }
  }
}
    ${PaginatedPersonFragmentDoc}`;

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