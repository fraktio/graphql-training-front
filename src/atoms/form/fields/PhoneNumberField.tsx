import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { InputProps, TextField } from "~/atoms/TextField";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const phoneNumberValidation = Yup.string()
  .matches(phoneRegExp, "Phone number is not valid")
  .required("Last name is required");

export const PhoneNumberField = (props: InputProps): ReactElement => {
  const { formState, register } = useFormContext();

  const error = formState.errors?.phone?.message;

  return (
    <TextField
      id="phone"
      type="tel"
      label="Phone number"
      helperText={error ?? null}
      placeholder="Phone number"
      isError={!!error}
      {...register("phone")}
      {...props}
    />
  );
};
