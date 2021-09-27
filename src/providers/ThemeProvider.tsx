import { ThemeProvider as ThemeProviderOG } from "@emotion/react";
import { ReactNode, ReactElement } from "react";

import { colorsDark, colorsLight } from "~/design";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props): ReactElement => {
  const isDark = false;
  const theme = {
    colors: isDark ? colorsDark : colorsLight,
  };

  return <ThemeProviderOG theme={theme}>{children}</ThemeProviderOG>;
};
