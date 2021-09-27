/* eslint-disable max-params */
import { TypePolicies } from "@apollo/client";

export const typePoliciesPerson: TypePolicies = {
  Person: {
    fields: {
      birthday: {
        read: (field: string): Date => new Date(field),
      },
      age: {
        read: (_, { readField }) => {
          const birthDay = readField("birthday") as Date;
          if (!birthDay) {
            return null;
          }

          const age = Math.floor(
            (new Date().getTime() - birthDay.getTime()) / 3.15576e10,
          );

          return age;
        },
      },
    },
  },
  PersonsPaginationEdge: {
    keyFields: ["cursor"],
  },
};
