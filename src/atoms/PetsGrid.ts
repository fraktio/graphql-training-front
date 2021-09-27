import styled from "@emotion/styled";

import { scale } from "~/design";

export const PetsGrid = styled.section({
  display: "grid",
  width: "100%",
  rowGap: scale(4),
});
