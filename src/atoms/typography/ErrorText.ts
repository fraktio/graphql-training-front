import styled from "@emotion/styled";

import { scale, fontSizes } from "~/design";

export const ErrorText = styled.small(({ theme }) => ({
  fontSize: fontSizes.small,
  color: theme.colors.error,
  height: scale(4),
}));
