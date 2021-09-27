import styled from "@emotion/styled";

import { fontSizes, fontWeights, scale } from "~/design";

export const Paragraph = styled.p(({ theme }) => ({
  color: theme.colors.text,
  fontSize: fontSizes.default,
  fontWeight: fontWeights.light,
  margin: `${scale(3)} 0`,
}));
