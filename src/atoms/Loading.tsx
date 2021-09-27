import styled from "@emotion/styled";
import { ReactElement } from "react";

import { LoadingIcon } from "~/atoms/LoadingIcon";
import { Row } from "~/atoms/Row";
import { scale } from "~/design";

const Centered = styled(Row)({
  width: "100%",
  paddingTop: scale(2),
  paddingBottom: scale(2),
});

type Props = {
  className?: string;
};

export const Loading = ({ className }: Props): ReactElement => (
  <Centered className={className} center>
    <LoadingIcon />
  </Centered>
);
