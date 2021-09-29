/* eslint-disable max-params */
import { TypePolicies } from "@apollo/client";
import { PhoneNumber, parsePhoneNumberFromString } from "libphonenumber-js";
import { DateTime } from "luxon";

import { Gender } from "~/atoms/form/fields/GenderField";

export const typePoliciesPerson: TypePolicies = {
  Person: {
    fields: {
      birthday: {
        read: (field: string): DateTime =>
          DateTime.fromFormat(field, "yyyy-MM-dd", { locale: "fi-FI" }),
      },
      age: {
        read: (_, { readField }) => {
          const birthDay = readField("birthday") as DateTime;
          if (!birthDay) {
            return null;
          }

          return Math.floor(Math.abs(birthDay.diffNow().as("years")));
        },
      },
      gender: {
        read: (field: string): Gender => field as Gender,
      },
      phone: {
        read: (field: string): PhoneNumber | undefined =>
          parsePhoneNumberFromString(field, "FI"),
      },
    },
  },
  PersonsPaginationEdge: {
    keyFields: ["cursor"],
  },
};
