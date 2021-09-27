import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { InputProps, TextField } from "~/atoms/TextField";

export const birthdayValidation = Yup.string().required(
  "Last name is required",
);

export const BirthdayField = (props: InputProps): ReactElement => {
  const { formState, register } = useFormContext();

  const error = formState.errors?.birthday?.message;

  return (
    <TextField
      id="birthday"
      type="date"
      label="Birthday"
      helperText={error ?? null}
      placeholder="Birthday"
      isError={!!error}
      {...register("birthday")}
      {...props}
    />
  );
};
