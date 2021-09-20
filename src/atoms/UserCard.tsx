import React, { ReactElement } from "react";

import { Button } from "~/atoms/Button";
import { Card } from "~/atoms/Card";
import { Paragraph } from "~/atoms/typography/Paragraph";

export type User = { UUID: string; firstName: string; lastName: string };

type Props<U extends User = User> = {
  user: U;
  onDelete?: (user: U) => void;
};

export const UserCard = ({ user, onDelete }: Props): ReactElement => {
  const fullName = `${user.firstName} ${user.lastName}`;

  const handleOnClick = () => {
    if (onDelete) {
      onDelete(user);
    }
  };

  return (
    <Card noMargin>
      <Paragraph>{fullName}</Paragraph>
      {onDelete && <Button onClick={handleOnClick}>Delete</Button>}
    </Card>
  );
};
