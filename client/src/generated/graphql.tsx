import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  PersonalIdentityCode: any;
  /** Phone scalar type */
  Phone: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
};


export enum AccessRight {
  User = 'USER',
  Admin = 'ADMIN'
}

export type AddCompanyInput = {
  company: CompanyInput;
};

export type AddCompanyOutput = AddCompanySuccess;

export type AddCompanySuccess = {
  __typename?: 'AddCompanySuccess';
  company: Company;
};

export type AddEmployeeInput = {
  companyUUID: Scalars['UUID'];
  personUUID: Scalars['UUID'];
};

export type AddEmployeeOutput = AddEmployeeSuccess;

export type AddEmployeeSuccess = {
  __typename?: 'AddEmployeeSuccess';
  company: Company;
};

export type AddPersonInput = {
  person: AddPersonPersonInput;
};

export type AddPersonOutput = AddPersonSuccess | UniqueConstraintViolationFailure;

export type AddPersonPersonInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['Phone']>;
  email: Scalars['Email'];
  birthday: Scalars['Date'];
  nationality: Scalars['CountryCode'];
  personalIdentityCode: Scalars['PersonalIdentityCode'];
  gender: Gender;
};

export type AddPersonSuccess = {
  __typename?: 'AddPersonSuccess';
  person: Person;
};

/** Adult is over 16 years old Person */
export type Adult = Person & {
  __typename?: 'Adult';
  /** Requires authentication and ADMIN privileges */
  UUID: Scalars['UUID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['Phone']>;
  email: Scalars['Email'];
  nationality: Scalars['CountryCode'];
  birthday: Scalars['Date'];
  timestamp: Timestamp;
  gender: Gender;
  employers: Array<Company>;
};

export type AuthenticatedUserFailure = {
  __typename?: 'AuthenticatedUserFailure';
  success: Scalars['Boolean'];
};

export type AuthenticatedUserResponse = AuthenticatedUserSuccess | AuthenticatedUserFailure;

export type AuthenticatedUserSuccess = {
  __typename?: 'AuthenticatedUserSuccess';
  user: User;
};

export type Company = {
  __typename?: 'Company';
  UUID: Scalars['UUID'];
  name: Scalars['String'];
  timestamp: Timestamp;
  employees: Array<Adult>;
};

export type CompanyFailureNotFound = {
  __typename?: 'CompanyFailureNotFound';
  success: Scalars['Boolean'];
};

export type CompanyFilterInput = {
  filterOperations?: Maybe<Array<CompanyFilterOperationInput>>;
  nameFilter?: Maybe<StringFilter>;
};

export type CompanyFilterOperationInput = {
  operator: FilterOperator;
  filters?: Maybe<Array<CompanyFilterInput>>;
};

export type CompanyInput = {
  name: Scalars['String'];
};

export type CompanyOutput = CompanySuccess | CompanyFailureNotFound;

export type CompanyQuery = {
  UUID: Scalars['UUID'];
};

export type CompanySuccess = {
  __typename?: 'CompanySuccess';
  company: Company;
};




export type DateFilter = {
  equal?: Maybe<Scalars['Date']>;
  notEqual?: Maybe<Scalars['Date']>;
  lessThan?: Maybe<Scalars['Date']>;
  lessOrEqualThan?: Maybe<Scalars['Date']>;
  greaterThan?: Maybe<Scalars['Date']>;
  greaterOrEqualThan?: Maybe<Scalars['Date']>;
};


export type EditCompanyFailureNotFound = {
  __typename?: 'EditCompanyFailureNotFound';
  success?: Maybe<Scalars['Boolean']>;
};

export type EditCompanyInput = {
  UUID: Scalars['UUID'];
  company: CompanyInput;
};

export type EditCompanyOutput = EditCompanySuccess | EditCompanyFailureNotFound;

export type EditCompanySuccess = {
  __typename?: 'EditCompanySuccess';
  company: Company;
};

export type EditPersonInput = {
  UUID: Scalars['UUID'];
  person: AddPersonPersonInput;
};

export type EditPersonOutput = EditPersonSuccess | UniqueConstraintViolationFailure | NotFoundFailure;

export type EditPersonSuccess = {
  __typename?: 'EditPersonSuccess';
  person: Person;
};


export type FailureOutput = {
  message: Scalars['String'];
  field: Scalars['String'];
};

export enum FilterOperator {
  And = 'AND',
  Or = 'OR'
}

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER'
}

export type InvalidCursorFailure = FailureOutput & {
  __typename?: 'InvalidCursorFailure';
  message: Scalars['String'];
  field: Scalars['String'];
};

export type LoginUserFailure = {
  __typename?: 'LoginUserFailure';
  success: Scalars['Boolean'];
};

export type LoginUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserResponse = LoginUserSuccess | LoginUserFailure;

export type LoginUserSuccess = {
  __typename?: 'LoginUserSuccess';
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginUserResponse;
  logout: Scalars['Boolean'];
  addCompany: AddCompanyOutput;
  editCompany: EditCompanyOutput;
  addEmployee: AddEmployeeOutput;
  removeEmployee: RemoveEmployeeOutput;
  addPerson: AddPersonOutput;
  editPerson: EditPersonOutput;
  register: RegisterResponse;
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationAddCompanyArgs = {
  input: AddCompanyInput;
};


export type MutationEditCompanyArgs = {
  input: EditCompanyInput;
};


export type MutationAddEmployeeArgs = {
  input: AddEmployeeInput;
};


export type MutationRemoveEmployeeArgs = {
  input: RemoveEmployeeInput;
};


export type MutationAddPersonArgs = {
  input: AddPersonInput;
};


export type MutationEditPersonArgs = {
  input: EditPersonInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type NotFoundFailure = FailureOutput & {
  __typename?: 'NotFoundFailure';
  message: Scalars['String'];
  field: Scalars['String'];
};

export type NumberFact = {
  __typename?: 'NumberFact';
  fact: Scalars['String'];
  number: Scalars['Int'];
};

export type NumberFactFailure = {
  __typename?: 'NumberFactFailure';
  success?: Maybe<Scalars['Boolean']>;
};

export type NumberFactInput = {
  number: Scalars['Int'];
};

export type NumberFactOutput = NumberFactSuccess | NumberFactFailure;

export type NumberFactSuccess = {
  __typename?: 'NumberFactSuccess';
  numberFact: NumberFact;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
};

export type PaginationInput = {
  limit?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['Cursor']>;
};

export type Person = {
  /** Requires authentication and ADMIN privileges */
  UUID: Scalars['UUID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['Phone']>;
  email: Scalars['Email'];
  nationality: Scalars['CountryCode'];
  birthday: Scalars['Date'];
  timestamp: Timestamp;
  gender: Gender;
};

export type PersonFilterInput = {
  filterOperations?: Maybe<Array<PersonFilterOperationInput>>;
  birthdayFilter?: Maybe<DateFilter>;
  nameFilter?: Maybe<StringFilter>;
};

export type PersonFilterOperationInput = {
  operator: FilterOperator;
  filters?: Maybe<Array<PersonFilterInput>>;
};

export type PersonInput = {
  UUID: Scalars['UUID'];
};

export enum PersonSortField {
  Birthday = 'birthday',
  FirstName = 'firstName',
  LastName = 'lastName',
  CreatedAt = 'createdAt'
}

export type PersonSortInput = {
  field: PersonSortField;
  order: SortOrder;
};


export type PersonsOutput = PersonsPaginationResponse | InvalidCursorFailure;

export type PersonsPaginationEdge = {
  __typename?: 'PersonsPaginationEdge';
  cursor: Scalars['Cursor'];
  node: Person;
};

export type PersonsPaginationResponse = {
  __typename?: 'PersonsPaginationResponse';
  edges: Array<PersonsPaginationEdge>;
  pageInfo: PageInfo;
};


export type Query = {
  __typename?: 'Query';
  authenticatedUser: AuthenticatedUserResponse;
  companies: Array<Company>;
  company: CompanyOutput;
  numberFact: NumberFactOutput;
  persons: PersonsOutput;
  person: Person;
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


export type QueryPersonsArgs = {
  filters?: Maybe<PersonFilterOperationInput>;
  sort?: Maybe<Array<PersonSortInput>>;
  pagination: PaginationInput;
};


export type QueryPersonArgs = {
  input: PersonInput;
};

export type RegisterFailure = {
  __typename?: 'RegisterFailure';
  success: Scalars['Boolean'];
};

export type RegisterFailureAlreadyExists = {
  __typename?: 'RegisterFailureAlreadyExists';
  success: Scalars['Boolean'];
};

export type RegisterInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['Email'];
  phoneNumber: Scalars['Phone'];
};

export type RegisterResponse = RegisterSuccess | RegisterFailure | RegisterFailureAlreadyExists;

export type RegisterSuccess = {
  __typename?: 'RegisterSuccess';
  success: Scalars['Boolean'];
};

export type RemoveEmployeeInput = {
  companyUUID: Scalars['UUID'];
  personUUID: Scalars['UUID'];
};

export type RemoveEmployeeOutput = RemoveEmployeeSuccess;

export type RemoveEmployeeSuccess = {
  __typename?: 'RemoveEmployeeSuccess';
  company: Company;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringFilter = {
  like?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  personAdded: Person;
};

export type TimeFilter = {
  equal?: Maybe<Scalars['DateTime']>;
  notEqual?: Maybe<Scalars['DateTime']>;
  lessThan?: Maybe<Scalars['DateTime']>;
  lessOrEqualThan?: Maybe<Scalars['DateTime']>;
  greaterThan?: Maybe<Scalars['DateTime']>;
  greaterOrEqualThan?: Maybe<Scalars['DateTime']>;
};

export type Timestamp = {
  __typename?: 'Timestamp';
  createdAt: Scalars['DateTime'];
  modifiedAt?: Maybe<Scalars['DateTime']>;
};


/** Underage is under 16 years old Person */
export type Underage = Person & {
  __typename?: 'Underage';
  /** Requires authentication and ADMIN privileges */
  UUID: Scalars['UUID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['Phone']>;
  email: Scalars['Email'];
  nationality: Scalars['CountryCode'];
  birthday: Scalars['Date'];
  timestamp: Timestamp;
  gender: Gender;
};

/** Operation fails because some value is not unique */
export type UniqueConstraintViolationFailure = FailureOutput & {
  __typename?: 'UniqueConstraintViolationFailure';
  message: Scalars['String'];
  field: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  UUID: Scalars['UUID'];
  username: Scalars['String'];
};
