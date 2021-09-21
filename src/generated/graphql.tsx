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
  companyUUID: Scalars['UUID'];
  personUUID: Scalars['UUID'];
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
  phone?: Maybe<Scalars['Phone']>;
};

export type AddPersonSuccess = {
  __typename: 'AddPersonSuccess';
  person: Person;
};

/** Adult is over 16 years old Person */
export type Adult = Person & {
  __typename: 'Adult';
  UUID: Scalars['UUID'];
  birthday: Scalars['Date'];
  email: Scalars['Email'];
  employers: Array<Company>;
  firstName: Scalars['String'];
  gender: Gender;
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
  UUID: Scalars['UUID'];
  employees: Array<Adult>;
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
  UUID: Scalars['UUID'];
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
  UUID: Scalars['UUID'];
  company: CompanyInput;
};

export type EditCompanyOutput = EditCompanyFailureNotFound | EditCompanySuccess;

export type EditCompanySuccess = {
  __typename: 'EditCompanySuccess';
  company: Company;
};

export type EditPersonInput = {
  UUID: Scalars['UUID'];
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
  addPerson: AddPersonOutput;
  editCompany: EditCompanyOutput;
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
  UUID: Scalars['UUID'];
  birthday: Scalars['Date'];
  email: Scalars['Email'];
  firstName: Scalars['String'];
  gender: Gender;
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
  UUID: Scalars['UUID'];
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
  allPersons: Array<Person>;
  authenticatedUser: AuthenticatedUserResponse;
  /** Cached person query is cached for 120 seconds */
  cachedPerson: Person;
  companies: Array<Company>;
  company: CompanyOutput;
  numberFact: NumberFactOutput;
  person: Person;
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
  companyUUID: Scalars['UUID'];
  personUUID: Scalars['UUID'];
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
  UUID: Scalars['UUID'];
  birthday: Scalars['Date'];
  email: Scalars['Email'];
  firstName: Scalars['String'];
  gender: Gender;
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
  UUID: Scalars['UUID'];
  username: Scalars['String'];
};

export type AdultFragment = { __typename: 'Adult', employers: Array<{ __typename: 'Company', UUID: any, name: string }> };

export type AllPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPersonsQuery = { __typename: 'Query', allPersons: Array<{ __typename: 'Adult', firstName: string, lastName: string, UUID: any, birthday: any, employers: Array<{ __typename: 'Company', UUID: any, name: string }> } | { __typename: 'Underage', firstName: string, lastName: string, UUID: any, birthday: any }> };

export const AdultFragmentDoc = gql`
    fragment Adult on Adult {
  employers {
    UUID
    name
  }
}
    `;
export const AllPersonsDocument = gql`
    query AllPersons {
  allPersons {
    firstName
    lastName
    UUID
    birthday
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