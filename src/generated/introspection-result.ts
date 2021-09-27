
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
      "AuthenticatedUserFailure",
      "AuthenticatedUserSuccess"
    ],
    "CompanyOutput": [
      "CompanyFailureNotFound",
      "CompanySuccess"
    ],
    "EditCompanyOutput": [
      "EditCompanyFailureNotFound",
      "EditCompanySuccess"
    ],
    "EditPersonOutput": [
      "EditPersonSuccess",
      "NotFoundFailure",
      "UniqueConstraintViolationFailure"
    ],
    "FailureOutput": [
      "FileMetadataInvalidFile",
      "InvalidCursorFailure",
      "NotFoundFailure",
      "UniqueConstraintViolationFailure"
    ],
    "FileMetadataResponse": [
      "FileMetadataInvalidFile",
      "FileMetadataSuccess"
    ],
    "LoginUserResponse": [
      "LoginUserFailure",
      "LoginUserSuccess"
    ],
    "NumberFactOutput": [
      "NumberFactFailure",
      "NumberFactSuccess"
    ],
    "Person": [
      "Adult",
      "Underage"
    ],
    "PersonsPaginationOutput": [
      "InvalidCursorFailure",
      "PersonsPaginationResponse"
    ],
    "RegisterResponse": [
      "RegisterFailure",
      "RegisterFailureAlreadyExists",
      "RegisterSuccess"
    ],
    "RemoveEmployeeOutput": [
      "RemoveEmployeeSuccess"
    ]
  }
};
      export default result;
    