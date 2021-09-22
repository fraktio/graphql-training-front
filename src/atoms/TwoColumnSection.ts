import styled from "@emotion/styled";

import { mq, scale } from "~/design";

export const TwoColumnSection = styled.div(
  mq({
    display: "grid",
    gridTemplateColumns: ["1fr", null, "1fr 1fr"],
    width: "100%",
    columnGap: [0, null, scale(8)],
  }),
);
