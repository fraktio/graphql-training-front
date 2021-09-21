import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { InputProps, TextField } from "~/atoms/TextField";

export const lastNameValidation = Yup.string()
  .min(3, "Last name is too short, min 3 characters")
  .matches(
    /^[0-9A-Za-zöäåÖÄÅ ]+[0-9A-Za-zöäåÖÄÅ_-]{1}[0-9A-Za-zöäåÖÄÅ]*$/,
    "Only numbers and letters are accepted",
  )
  .max(20, "Last name is too long, max 20 characters")
  .required("Last name is required");

export const LastNameField = (props: InputProps): ReactElement => {
  const { formState, register } = useFormContext();

  const error = formState.errors?.lastName?.message;

  return (
    <TextField
      id="lastName"
      label="Last name"
      helperText={error ?? null}
      placeholder="Last name"
      isError={!!error}
      {...register("lastName")}
      {...props}
    />
  );
};
