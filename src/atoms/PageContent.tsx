import styled from "@emotion/styled";
import { ReactNode, ReactElement } from "react";

import { mq, scale } from "~/design";
import { Footer } from "~/molecules/Footer";

type ContentProps = {
  isNarrow?: boolean;
};

const PageMaxWidthContent = styled.div<ContentProps>(({ isNarrow }) =>
  mq({
    flexShrink: 0,
    width: "100%",
    margin: "0 auto",
    maxWidth: isNarrow ? scale(160) : scale(280),
    padding: scale(8),
    paddingBottom: scale(20),
  }),
);

type Props = {
  children: ReactNode;
  isNarrow?: boolean;
};

export const PageContent = ({ children, isNarrow }: Props): ReactElement => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <PageMaxWidthContent isNarrow={isNarrow}>{children}</PageMaxWidthContent>
  </div>
);
// <Footer />
