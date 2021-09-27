import { yupResolver } from "@hookform/resolvers/yup";
import { ReactElement } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";

import { Button } from "~/atoms/Button";
import { FileField, fileValidation } from "~/atoms/form/fields/FileField";

const defaultFormValues: FileFormValues = {
  file: null,
};

const schema = Yup.object().shape({
  file: fileValidation,
});

export type FileFormValues = {
  file: FileList | null;
};

type Props = {
  defaultValues?: FileFormValues;
  onFile: (data: FileFormValues) => void;
};

export const FileUploadForm = ({
  defaultValues = defaultFormValues,
  onFile,
}: Props): ReactElement => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onFile)}>
        <FileField id="file" />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
