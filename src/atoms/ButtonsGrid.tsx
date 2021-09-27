import styled from "@emotion/styled";

import { scale } from "~/design";

export const ButtonsGrid = styled.div({
  "> *": {
    marginLeft: scale(4),

    ":first-of-type": {
      marginLeft: 0,
    },
  },
});
