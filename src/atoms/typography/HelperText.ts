import styled from "@emotion/styled";

import { fontSizes, scale } from "~/design";

type HelperTextProps = {
  isError?: boolean;
};

export const HelperText = styled.p<HelperTextProps>(
  ({ theme }) => ({
    color: theme.colors.text,
    fontSize: fontSizes.small,
    height: scale(4),
  }),
  ({ isError, theme }) => isError && { color: theme.colors.error },
);
