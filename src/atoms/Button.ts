import styled, { CSSObject } from "@emotion/styled";

import { fontSizes, scale } from "~/design";

export type CssReturnType = undefined | false | CSSObject;

interface Props {
  noMargin?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<Props>(({ disabled, theme }) => ({
  border: "none",
  cursor: disabled ? "not-allowed" : "pointer",
  color: theme.colors.primaryColor,
  userSelect: "none",
  fontSize: fontSizes.default,
  padding: `${scale(3)} ${scale(5)}`,
  backgroundImage: "none",
  backgroundColor: theme.colors.primary,
  marginBottom: scale(3),
  opacity: disabled ? 0.6 : 1,
  borderRadius: scale(1),
  transition: "background-color 120ms",

  ...(!disabled && {
    ":hover": {
      backgroundColor: theme.colors.primaryDarken,
    },
  }),
}));
