import styled from "@emotion/styled";

import { scale } from "~/design";

type CardProps = {
  noMargin?: boolean;
};

export const Card = styled.div<CardProps>(
  ({ theme }) => ({
    padding: scale(4),
    borderRadius: scale(2),
    backgroundColor: theme.colors.card,
    boxShadow:
      // eslint-disable-next-line max-len
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  }),
  ({ noMargin }) => !noMargin && { marginBottom: scale(5) },
);
