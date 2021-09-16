import styled from "@emotion/styled";

import { scale, fontWeights, fontSizes } from "~/design";

export const H1 = styled.h1(({ theme }) => ({
  color: theme.colors.text,
  fontSize: fontSizes.h1,
  lineHeight: 1.2,
  fontWeight: fontWeights.light,
  margin: `${scale(2)} 0`,
}));
