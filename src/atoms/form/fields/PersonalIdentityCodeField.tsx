import { FinnishSSN } from "finnish-ssn";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { InputProps, TextField } from "~/atoms/TextField";

export const ssnValidation = Yup.string()
  .test("oneOfGender", "Not a valid identity code", (item) =>
    FinnishSSN.validate(item ?? ""),
  )
  .required("Personal identity code is required");

export const PersonalIdentityCodeField = (props: InputProps): ReactElement => {
  const { formState, register } = useFormContext();

  const error = formState.errors?.personalIdentityCode?.message;

  return (
    <TextField
      id="personalIdentityCode"
      label="Personal Identity code"
      helperText={error ?? null}
      placeholder="Personal Identity code"
      isError={!!error}
      {...register("personalIdentityCode")}
      {...props}
    />
  );
};
