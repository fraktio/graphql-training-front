import { yupResolver } from "@hookform/resolvers/yup";
import React, { ReactElement } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";

import { Button } from "~/atoms/Button";
import {
  BirthdayField,
  birthdayValidation,
} from "~/atoms/form/fields/BirthdayField";
import { EmailField, emailValidation } from "~/atoms/form/fields/EmailField";
import {
  FirstNameField,
  firstNameValidation,
} from "~/atoms/form/fields/FirstNameField";
import { GenderField, genderValidation } from "~/atoms/form/fields/GenderField";
import {
  LastNameField,
  lastNameValidation,
} from "~/atoms/form/fields/LastNameField";
import {
  NationalityField,
  nationalityValidation,
} from "~/atoms/form/fields/NationalityField";
import {
  PhoneNumberField,
  phoneNumberValidation,
} from "~/atoms/form/fields/PhoneNumberField";

const defaultFormValues: PersonFormValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  birthday: "",
  nationality: "FI",
  gender: "",
};

const schema = Yup.object().shape({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  phoneNumber: phoneNumberValidation,
  email: emailValidation,
  birthday: birthdayValidation,
  nationality: nationalityValidation,
  gender: genderValidation,
});

export type PersonFormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthday: string;
  nationality: string;
  gender: string;
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
        <LastNameField required />
        <EmailField required />
        <PhoneNumberField required />
        <BirthdayField required />
        <NationalityField required />
        <GenderField required />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
