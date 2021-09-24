import styled from "@emotion/styled";

import { scale } from "~/design";

type Props = {
  small?: boolean;
};

export const Section = styled.section<Props>(({ small }) => ({
  marginBottom: small ? scale(4) : scale(12),
}));
