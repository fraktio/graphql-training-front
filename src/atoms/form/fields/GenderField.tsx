import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { Option, SelectInput } from "~/atoms/SelectInput";
import { InputProps } from "~/atoms/TextField";

const genderOptions = ["MALE", "FEMALE", "OTHER"] as const;

export type Gender = typeof genderOptions[number];

export const genderValidation = Yup.string()
  .test(
    "oneOfGender",
    "Male, female or other",
    (item) => !!item && ["MALE", "FEMALE", "OTHER"].includes(item),
  )
  .required("Gender is required");

export const GenderField = (props: InputProps): ReactElement => {
  const { formState, register, setValue } = useFormContext();

  const error = formState.errors?.gender?.message;

  const handleOnOption = (option: Option) => {
    setValue("gender", option.value);
  };

  return (
    <SelectInput
      id="gender"
      label="Gender"
      helperText={error ?? null}
      placeholder="Gender"
      isError={!!error}
      options={[
        { value: "pick", label: "Pick", disabled: true },
        { value: "MALE", label: "Male" },
        { value: "FEMALE", label: "Female" },
        { value: "OTHER", label: "Other" },
      ]}
      onOption={handleOnOption}
      {...register("gender")}
      {...props}
    />
  );
};
