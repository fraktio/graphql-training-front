import styled from "@emotion/styled";
import { ReactElement } from "react";

import { Row } from "~/atoms/Row";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { scale } from "~/design";

const Centered = styled(Row)({
  width: "100%",
  paddingTop: scale(2),
  paddingBottom: scale(2),
});

type Props = {
  className?: string;
};

export const NotFound = ({ className }: Props): ReactElement => (
  <Centered className={className} center>
    <Paragraph css={{ opacity: 0.6, userSelect: "none" }}>Not found</Paragraph>
  </Centered>
);
