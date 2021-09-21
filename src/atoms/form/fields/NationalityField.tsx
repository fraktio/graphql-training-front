import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { InputProps, TextField } from "~/atoms/TextField";

export const nationalityValidation = Yup.string().required(
  "Nationality is required",
);

export const NationalityField = (props: InputProps): ReactElement => {
  const { formState, register } = useFormContext();

  const error = formState.errors?.nationality?.message;

  return (
    <TextField
      id="nationality"
      label="Nationality"
      helperText={error ?? null}
      placeholder="Nationality"
      isError={!!error}
      {...register("nationality")}
      {...props}
      disabled
    />
  );
};
