import styled from "@emotion/styled";

import { fontWeights, scale, fontSizes } from "~/design";

type Props = {
  noMargin?: boolean;
};

export const H3 = styled.h3<Props>(({ theme }) => ({
  color: theme.colors.text,
  fontSize: fontSizes.h3,
  lineHeight: 1.3,
  marginBottom: scale(2),
  fontWeight: fontWeights.light,
}));
