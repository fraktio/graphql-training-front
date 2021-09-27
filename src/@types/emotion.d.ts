// Do not change this import to alias import => nothing will work otherwise
import { Interpolation } from "@emotion/serialize";

import { Theme as CustomTheme } from "~/design";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}

declare module "react" {
  interface Attributes {
    css?: Interpolation<CustomTheme>;
  }
}
