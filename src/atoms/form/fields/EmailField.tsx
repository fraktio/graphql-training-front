import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { InputProps, TextField } from "~/atoms/TextField";

export const emailValidation = Yup.string()
  .email()
  .required("Email is required");

export const EmailField = (props: InputProps): ReactElement => {
  const { formState, register } = useFormContext();

  const error = formState.errors?.email?.message;

  return (
    <TextField
      id="email"
      label="Email"
      helperText={error ?? null}
      placeholder="Email"
      isError={!!error}
      {...register("email")}
      {...props}
    />
  );
};
