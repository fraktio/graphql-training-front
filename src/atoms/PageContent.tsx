import styled from "@emotion/styled";
import { ReactNode, ReactElement } from "react";

import { mq, scale } from "~/design";

type ContentProps = {
  isNarrow?: boolean;
};

const PageMaxWidthContent = styled.div<ContentProps>(({ isNarrow }) =>
  mq({
    width: "100%",
    margin: "0 auto",
    maxWidth: isNarrow ? scale(150) : scale(280),
    padding: scale(8),
    paddingBottom: scale(20),
  }),
);

type Props = {
  children: ReactNode;
  isNarrow?: boolean;
};

export const PageContent = ({ children, isNarrow }: Props): ReactElement => (
  <PageMaxWidthContent isNarrow={isNarrow}>{children}</PageMaxWidthContent>
);
