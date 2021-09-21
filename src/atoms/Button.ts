import styled, { CSSObject } from "@emotion/styled";

import { fontSizes, scale } from "~/design";

export type CssReturnType = undefined | false | CSSObject;

interface Props {
  noMargin?: boolean;
  disabled?: boolean;
  success?: boolean;
}

export const Button = styled.button<Props>(({ disabled, theme, success }) => ({
  border: "none",
  cursor: disabled ? "not-allowed" : "pointer",
  color: success ? theme.colors.successColor : theme.colors.primaryColor,
  userSelect: "none",
  fontSize: fontSizes.default,
  padding: `${scale(3)} ${scale(5)}`,
  backgroundImage: "none",
  backgroundColor: success ? theme.colors.success : theme.colors.primary,
  marginBottom: scale(3),
  opacity: disabled ? 0.6 : 1,
  borderRadius: scale(1),
  lineHeight: 1,
  transition: "background-color 120ms",

  ...(!disabled && {
    ":hover": {
      backgroundColor: success
        ? theme.colors.successDarken
        : theme.colors.primaryDarken,
    },
  }),
}));
