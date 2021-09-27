/* eslint-disable max-params */
import { TypePolicies } from "@apollo/client";

export const typePoliciesPerson: TypePolicies = {
  PersonsPaginationEdge: {
    keyFields: ["cursor"],
  },
};

/* Use This to calculate age @ step 10.
const getAgeFromDate = (date: Date): number =>
  Math.floor((new Date().getTime() - date.getTime()) / 3.15576e10);
*/
