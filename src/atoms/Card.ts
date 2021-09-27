import styled from "@emotion/styled";

import { scale } from "~/design";

export type CardProps = {
  background?: boolean;
  noMargin?: boolean;
};

export const Card = styled.div<CardProps>(
  {
    padding: scale(4),
    borderRadius: scale(2),
  },
  ({ noMargin }) => !noMargin && { marginBottom: scale(5) },
  ({ background }) =>
    !background && {
      boxShadow:
        // eslint-disable-next-line max-len
        "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    },

  ({ theme, background }) =>
    background && {
      border: `1px solid ${theme.colors.borderSoft}`,
    },
  ({ theme, background }) => ({
    backgroundColor: background ? theme.colors.background : theme.colors.card,
  }),
);
