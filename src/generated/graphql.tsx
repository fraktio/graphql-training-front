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
  readonly companyUUID: Scalars['UUID'];
  readonly personUUID: Scalars['UUID'];
};

export type AddEmployeeOutput = AddEmployeeSuccess;

export type AddEmployeeSuccess = {
  readonly __typename: 'AddEmployeeSuccess';
  readonly company: Company;
};

export type AddPersonInput = {
  readonly person: AddPersonPersonInput;
};

export type AddPersonOutput = AddPersonSuccess | UniqueConstraintViolationFailure;

export type AddPersonPersonInput = {
  readonly birthday: Scalars['Date'];
  readonly email: Scalars['Email'];
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  /** Last name has to be minimum of 1 chracters and maximum of 50 */
  readonly lastName: Maybe<Scalars['StringWithMaxLength50AndMinLength1']>;
  readonly nationality: Scalars['CountryCode'];
  readonly personalIdentityCode: Scalars['PersonalIdentityCode'];
  readonly phone: Maybe<Scalars['Phone']>;
};

export type AddPersonSuccess = {
  readonly __typename: 'AddPersonSuccess';
  readonly person: Person;
};

/** Adult is over 16 years old Person */
export type Adult = Person & {
  readonly __typename: 'Adult';
  readonly UUID: Scalars['UUID'];
  readonly age: Maybe<Scalars['Int']>;
  readonly birthday: Scalars['Date'];
  readonly email: Scalars['Email'];
  readonly employers: ReadonlyArray<Company>;
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  readonly lastName: Scalars['String'];
  readonly nationality: Scalars['CountryCode'];
  /** Requires authentication and ADMIN privileges */
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
  readonly UUID: Scalars['UUID'];
  readonly employees: ReadonlyArray<Adult>;
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
  readonly UUID: Scalars['UUID'];
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
  readonly UUID: Scalars['UUID'];
  readonly company: CompanyInput;
};

export type EditCompanyOutput = EditCompanyFailureNotFound | EditCompanySuccess;

export type EditCompanySuccess = {
  readonly __typename: 'EditCompanySuccess';
  readonly company: Company;
};

export type EditPersonInput = {
  readonly UUID: Scalars['UUID'];
  readonly person: AddPersonPersonInput;
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
  readonly user: User;
};

export type Mutation = {
  readonly __typename: 'Mutation';
  readonly addCompany: AddCompanyOutput;
  readonly addEmployee: AddEmployeeOutput;
  readonly addPerson: AddPersonOutput;
  readonly editCompany: EditCompanyOutput;
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
  readonly UUID: Scalars['UUID'];
  readonly age: Maybe<Scalars['Int']>;
  readonly birthday: Scalars['Date'];
  readonly email: Scalars['Email'];
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  readonly lastName: Scalars['String'];
  readonly nationality: Scalars['CountryCode'];
  /** Requires authentication and ADMIN privileges */
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
  readonly UUID: Scalars['UUID'];
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
  readonly allPersons: ReadonlyArray<Person>;
  readonly authenticatedUser: AuthenticatedUserResponse;
  /** Cached person query is cached for 120 seconds */
  readonly cachedPerson: Person;
  readonly companies: ReadonlyArray<Company>;
  readonly company: CompanyOutput;
  readonly numberFact: NumberFactOutput;
  readonly person: Person;
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
  readonly companyUUID: Scalars['UUID'];
  readonly personUUID: Scalars['UUID'];
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
  readonly UUID: Scalars['UUID'];
  readonly age: Maybe<Scalars['Int']>;
  readonly birthday: Scalars['Date'];
  readonly email: Scalars['Email'];
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  readonly lastName: Scalars['String'];
  readonly nationality: Scalars['CountryCode'];
  /** Requires authentication and ADMIN privileges */
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
  readonly UUID: Scalars['UUID'];
  readonly username: Scalars['String'];
};

export type AuthenticatedUserFragment = { readonly __typename: 'User', readonly UUID: any, readonly username: string };

export type AuthenticatedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticatedUserQuery = { readonly __typename: 'Query', readonly authenticatedUser: { readonly __typename: 'AuthenticatedUserFailure', readonly success: boolean } | { readonly __typename: 'AuthenticatedUserSuccess', readonly user: { readonly __typename: 'User', readonly UUID: any, readonly username: string } } };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { readonly __typename: 'Mutation', readonly login: { readonly __typename: 'LoginUserFailure', readonly success: boolean } | { readonly __typename: 'LoginUserSuccess', readonly user: { readonly __typename: 'User', readonly UUID: any, readonly username: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { readonly __typename: 'Mutation', readonly logout: boolean };

export type AdultFragment = { readonly __typename: 'Adult', readonly employers: ReadonlyArray<{ readonly __typename: 'Company', readonly UUID: any, readonly name: string }> };

export type AllPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPersonsQuery = { readonly __typename: 'Query', readonly allPersons: ReadonlyArray<{ readonly __typename: 'Adult', readonly firstName: string, readonly lastName: string, readonly UUID: any, readonly birthday: any, readonly age: Maybe<number>, readonly employers: ReadonlyArray<{ readonly __typename: 'Company', readonly UUID: any, readonly name: string }> } | { readonly __typename: 'Underage', readonly firstName: string, readonly lastName: string, readonly UUID: any, readonly birthday: any, readonly age: Maybe<number> }> };

export const AuthenticatedUserFragmentDoc = gql`
    fragment AuthenticatedUser on User {
  UUID
  username
}
    `;
export const AdultFragmentDoc = gql`
    fragment Adult on Adult {
  employers {
    UUID
    name
  }
}
    `;
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
export const AllPersonsDocument = gql`
    query AllPersons {
  allPersons {
    firstName
    lastName
    UUID
    birthday
    age @client
    ...Adult
  }
}
    ${AdultFragmentDoc}`;

/**
 * __useAllPersonsQuery__
 *
 * To run a query within a React component, call `useAllPersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPersonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPersonsQuery(baseOptions?: Apollo.QueryHookOptions<AllPersonsQuery, AllPersonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPersonsQuery, AllPersonsQueryVariables>(AllPersonsDocument, options);
      }
export function useAllPersonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPersonsQuery, AllPersonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPersonsQuery, AllPersonsQueryVariables>(AllPersonsDocument, options);
        }
export type AllPersonsQueryHookResult = ReturnType<typeof useAllPersonsQuery>;
export type AllPersonsLazyQueryHookResult = ReturnType<typeof useAllPersonsLazyQuery>;
export type AllPersonsQueryResult = Apollo.QueryResult<AllPersonsQuery, AllPersonsQueryVariables>;