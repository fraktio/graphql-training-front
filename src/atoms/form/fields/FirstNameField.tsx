import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { InputProps, TextField } from "~/atoms/TextField";

export const firstNameValidation = Yup.string()
  .min(3, "First name is too short, min 3 characters")
  .matches(
    /^[0-9A-Za-zöäåÖÄÅ ]+[0-9A-Za-zöäåÖÄÅ_-]{1}[0-9A-Za-zöäåÖÄÅ]*$/,
    "Only numbers and letters are accepted",
  )
  .max(20, "First name is too long, max 20 characters")
  .required("First name is required");

export const FirstNameField = (props: InputProps): ReactElement => {
  const { formState, register } = useFormContext();

  const error = formState.errors?.firstName?.message;

  return (
    <TextField
      id="firstName"
      label="First name"
      helperText={error ?? null}
      placeholder="First name"
      isError={!!error}
      {...register("firstName")}
      {...props}
    />
  );
};
