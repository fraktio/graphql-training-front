/* eslint-disable max-params */
import { TypePolicies } from "@apollo/client";

export const typePoliciesPerson: TypePolicies = {
  Adult: {
    keyFields: ["email"],
    fields: {
      birthday: {
        read: (field: string): Date => new Date(field),
      },
    },
  },
  PersonsPaginationEdge: {
    keyFields: ["cursor"],
  },
};

/* Use This to calculate age @ step 10.
const getAgeFromDate = (date: Date): number =>
  Math.floor((new Date().getTime() - date.getTime()) / 3.15576e10);
*/
