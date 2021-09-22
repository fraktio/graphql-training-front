import React, { ReactElement } from "react";

import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";

export type Company = {
  readonly __typename: string;
  readonly UUID: string;
  readonly name: string;
};

type Props<U extends Company = Company> = {
  company: U;
};

export const CompanyCard = ({ company }: Props): ReactElement => (
  <Card noMargin>
    <Paragraph>{company.name}</Paragraph>
  </Card>
);
