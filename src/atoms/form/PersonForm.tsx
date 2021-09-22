import { yupResolver } from "@hookform/resolvers/yup";
import faker from "faker";
import { FinnishSSN } from "finnish-ssn";
import { DateTime } from "luxon";
import React, { ReactElement } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";

import { Button } from "~/atoms/Button";
import { ButtonsGrid } from "~/atoms/ButtonsGrid";
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
  PersonalIdentityCodeField,
  ssnValidation,
} from "~/atoms/form/fields/PersonalIdentityCodeField";
import {
  PhoneNumberField,
  phoneNumberValidation,
} from "~/atoms/form/fields/PhoneNumberField";
import { Gender } from "~/generated/graphql";
import { randomIntFromInterval } from "~/utils/math";
import { createValidSsn } from "~/utils/ssn";

const createMockValues = (): PersonFormValues => {
  const ssn = createValidSsn();

  const parsedSSN = FinnishSSN.parse(ssn);

  const gender = faker.random.arrayElement([
    Gender.Male,
    Gender.Female,
    Gender.Other,
  ]);

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber("040#######"),
    email: faker.internet.email(),
    birthday: DateTime.fromJSDate(parsedSSN.dateOfBirth).toSQLDate(),
    nationality: "FI",
    gender: gender,
    personalIdentityCode: FinnishSSN.createWithAge(
      randomIntFromInterval(16, 80),
    ),
  };
};

const createDefaultFormValues = (): PersonFormValues => ({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  birthday: "",
  nationality: "FI",
  gender: "pick",
  personalIdentityCode: FinnishSSN.createWithAge(randomIntFromInterval(16, 80)),
});

const schema = Yup.object().shape({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  phoneNumber: phoneNumberValidation,
  email: emailValidation,
  birthday: birthdayValidation,
  nationality: nationalityValidation,
  gender: genderValidation,
  personalIdentityCode: ssnValidation,
});

export type PersonFormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthday: string;
  nationality: string;
  gender: string;
  personalIdentityCode: string;
};

export type PersonHandler = (
  data: PersonFormValues,
  resetForm: () => void,
) => void;

type Props = {
  defaultValues?: PersonFormValues;
  onPerson: PersonHandler;
};

export const PersonForm = ({
  defaultValues,
  onPerson,
}: Props): ReactElement => {
  const methods = useForm({
    defaultValues: defaultValues ?? createDefaultFormValues(),
    resolver: yupResolver(schema),
  });

  const resetForm = () => {
    methods.reset(createDefaultFormValues());
  };

  const handleSubmit = (data: PersonFormValues) => {
    onPerson(data, resetForm);
  };

  const handleGenerate = () => {
    methods.reset(createMockValues());
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <FirstNameField required />
        <LastNameField required />
        <EmailField required />
        <PhoneNumberField required />
        <BirthdayField required />
        <NationalityField required />
        <GenderField required />
        <PersonalIdentityCodeField required />
        <ButtonsGrid>
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={handleGenerate}>
            Generate
          </Button>
        </ButtonsGrid>
      </form>
    </FormProvider>
  );
};
