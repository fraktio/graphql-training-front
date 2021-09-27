import React, { ReactElement } from "react";

import { Card, CardProps } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";

export type Company = {
  readonly __typename: string;
  readonly id: string;
  readonly name: string;
};

type Props<U extends Company = Company> = CardProps & {
  company: U;
};

export const CompanyCard = ({ company, ...rest }: Props): ReactElement => (
  <Card noMargin {...rest}>
    <Paragraph>{company.name}</Paragraph>
  </Card>
);
