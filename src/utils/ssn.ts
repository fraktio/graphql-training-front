import { FinnishSSN } from "finnish-ssn";

import { randomIntFromInterval } from "~/utils/math";

export const createValidSsn = (): string => {
  const ssn = FinnishSSN.createWithAge(randomIntFromInterval(15, 65));
  // Create tends to also create invalid SSN:s
  if (!FinnishSSN.validate(ssn)) {
    return createValidSsn();
  }

  return ssn;
};
