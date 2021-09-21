import styled from "@emotion/styled";

import { fontSizes, scale } from "~/design";

type SelectProps = {
  error?: boolean;
};

export const Select = styled.select<SelectProps>(
  ({ theme }) => ({
    padding: scale(3),
    width: "100%",
    fontSize: fontSizes.default,
    backgroundColor: theme.colors.card,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: scale(2),
    color: theme.colors.text,
    marginBottom: scale(1),
  }),
  ({ error, theme }) =>
    error && {
      borderColor: theme.colors.error,
    },
  ({ disabled }) =>
    disabled && {
      cursor: "not-allowed",
      opacity: 0.6,
    },
);
