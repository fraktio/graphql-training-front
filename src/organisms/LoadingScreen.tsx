import { ReactNode, ReactElement } from "react";

import { Column } from "~/atoms/Column";
import { LoadingIcon } from "~/atoms/LoadingIcon";
import { scale } from "~/design";

type Props = {
  children?: ReactNode;
};

export const LoadingScreen = ({ children }: Props): ReactElement => (
  <Column
    css={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
      padding: scale(4),
    }}
  >
    <LoadingIcon />

    {children && <div css={{ marginTop: scale(4) }}>{children}</div>}
  </Column>
);
