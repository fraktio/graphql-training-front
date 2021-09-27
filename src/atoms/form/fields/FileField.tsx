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

export const FileField = (props: FileInputProps): JSX.Element => {
  const { formState, register } = useFormContext();

  const error = formState.errors?.file?.message;

  return (
    <FileInput
      label="File"
      helperText={error ?? null}
      isError={!!error}
      {...register("file")}
      {...props}
    />
  );
};
