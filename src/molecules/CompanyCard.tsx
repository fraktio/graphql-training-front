import React, { ReactElement } from "react";

import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";

export type Company = {
  UUID: string;
  name: string;
};

type Props<U extends Company = Company> = {
  company: U;
};

export const CompanyCard = ({ company }: Props): ReactElement => (
  <Card noMargin>
    <Paragraph>{company.name}</Paragraph>
  </Card>
);
