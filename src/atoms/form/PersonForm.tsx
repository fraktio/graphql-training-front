import { yupResolver } from "@hookform/resolvers/yup";
import { ReactElement } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";

import { Button } from "~/atoms/Button";
import {
  FirstNameField,
  firstNameValidation,
} from "~/atoms/form/fields/FirstNameField";

const defaultFormValues: PersonFormValues = {
  firstName: "",
};

const schema = Yup.object().shape({
  firstName: firstNameValidation,
});

export type PersonFormValues = {
  firstName: string;
};

type Props = {
  defaultValues?: PersonFormValues;
  onPerson: (data: PersonFormValues) => void;
};

export const PersonForm = ({
  defaultValues = defaultFormValues,
  onPerson,
}: Props): ReactElement => {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onPerson)}>
        <FirstNameField required />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
