/* eslint-disable max-params */
import { TypePolicies } from "@apollo/client";

import {
  PersonsPaginationOutput,
  PersonsPaginationResponse,
} from "~/generated/graphql";

export const typePoliciesQueries: TypePolicies = {
  Query: {
    fields: {
      persons: {
        keyArgs: false,
        merge(
          existing: PersonsPaginationResponse | null,
          incoming: PersonsPaginationOutput,
          { args: { pagination }, readField },
        ) {
          if (incoming.__typename === "InvalidCursorFailure") {
            return incoming;
          }
          const incomingEdges = incoming.edges;
          const existingEdges = existing ? existing.edges : [];
          // Slicing is necessary because the existing data is
          // immutable, and frozen in development.
          const merged = existingEdges ? existingEdges.slice(0) : [];

          // Find current cursor to make offset for list
          let offset = offsetFromCursor(merged, pagination.cursor, readField);

          // If we couldn't find the cursor, we will append incoming data to
          // end of the list so data is saved.
          if (offset < 0) {
            offset = merged.length;
          }
          // Set incoming data to list in order
          for (let i = 0; i < incomingEdges.length; ++i) {
            merged[offset + i] = incomingEdges[i];
          }

          return { ...incoming, edges: merged };
        },
      },
    },
  },
};

function offsetFromCursor(items, cursor, readField) {
  // Search from the back of the list because the cursor we're
  // looking for is typically the ID of the last item.

  for (let i = items.length - 1; i >= 0; --i) {
    const item = items[i];
    // Using readField works for both non-normalized objects
    // (returning item.id) and normalized references (returning
    // the id field from the referenced entity object), so it's
    // a good idea to use readField when you're not sure what
    // kind of elements you're dealing with.

    if (readField("id", item) === cursor) {
      // Add one because the cursor identifies the item just
      // before the first item in the page we care about.
      return i + 1;
    }
  }

  // Report that the cursor could not be found.
  return -1;
}
