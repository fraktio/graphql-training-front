import React, { ChangeEvent, ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";

import { FileInput, FileInputProps } from "~/atoms/FileInput";

export const fileValidation = Yup.mixed()
  .test("fileIsRequired", "File must exist", function (item) {
    if (item === null) {
      return false;
    }

    if (item === undefined) {
      return false;
    }

    if (item.length === 0) {
      return false;
    }

    return true;
  })
  // .required("File is required")
  .nullable();

export const FileField = (props: FileInputProps): ReactElement => {
  const { formState, register, setValue } = useFormContext();

  const error = formState.errors?.file?.message;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("file", e.target.files);
  };

  return (
    <FileInput
      id="file"
      label="File"
      helperText={error ?? null}
      isError={!!error}
      {...register("file")}
      onChange={handleOnChange}
      {...props}
    />
  );
};
