import { ReactElement } from "react";

import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";

export type User = {
  firstName: string;
  lastName: string;
};

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props): ReactElement => {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Card noMargin>
      <Paragraph>{fullName}</Paragraph>
    </Card>
  );
};
