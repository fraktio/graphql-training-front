/* eslint-disable max-params */
import { TypePolicies } from "@apollo/client";

import { typePoliciesPerson } from "~/graphql/typePolicies/typePoliciesPerson";
import { typePoliciesQueries } from "~/graphql/typePolicies/typePoliciesQueries";

export const typePolicies: TypePolicies = {
  ...typePoliciesQueries,
  ...typePoliciesPerson,
};
