
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AddCompanyOutput": [
      "AddCompanySuccess"
    ],
    "AddEmployeeOutput": [
      "AddEmployeeSuccess"
    ],
    "AddPersonOutput": [
      "AddPersonSuccess",
      "UniqueConstraintViolationFailure"
    ],
    "AuthenticatedUserResponse": [
      "AuthenticatedUserSuccess",
      "AuthenticatedUserFailure"
    ],
    "CompanyOutput": [
      "CompanySuccess",
      "CompanyFailureNotFound"
    ],
    "EditCompanyOutput": [
      "EditCompanySuccess",
      "EditCompanyFailureNotFound"
    ],
    "EditPersonOutput": [
      "EditPersonSuccess",
      "UniqueConstraintViolationFailure",
      "NotFoundFailure"
    ],
    "FailureOutput": [
      "InvalidCursorFailure",
      "NotFoundFailure",
      "UniqueConstraintViolationFailure"
    ],
    "LoginUserResponse": [
      "LoginUserSuccess",
      "LoginUserFailure"
    ],
    "NumberFactOutput": [
      "NumberFactSuccess",
      "NumberFactFailure"
    ],
    "Person": [
      "Adult",
      "Underage"
    ],
    "PersonsOutput": [
      "PersonsPaginationResponse",
      "InvalidCursorFailure"
    ],
    "RegisterResponse": [
      "RegisterSuccess",
      "RegisterFailure",
      "RegisterFailureAlreadyExists"
    ],
    "RemoveEmployeeOutput": [
      "RemoveEmployeeSuccess"
    ]
  }
};
      export default result;
    