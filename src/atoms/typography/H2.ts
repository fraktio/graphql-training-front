import styled from "@emotion/styled";

import { fontWeights, scale, fontSizes } from "~/design";

export const H2 = styled.h2(({ theme }) => ({
  color: theme.colors.text,
  fontSize: fontSizes.h2,
  lineHeight: 1.3,
  margin: `${scale(1.5)} 0`,
  fontWeight: fontWeights.light,
}));
