import styled from "@emotion/styled";

import { scale, fontSizes } from "~/design";

export const Label = styled.label(({ theme }) => ({
  color: theme.colors.text,
  display: "block",
  fontSize: fontSizes.default,
  marginBottom: scale(1),
}));
