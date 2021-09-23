import { css, Global, useTheme } from "@emotion/react";
import facepaint from "facepaint";

const scaleBase = 4;

export const scale = (multiplier: number): string =>
  `${scaleBase * multiplier}px`;

export const breakpoints = [480, 800, 960, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media(min-width: ${bp}px)`),
);

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  strong: 700,
};

export const colorsLight: Colors = {
  primary: "#1e88e5",
  primaryDarken: "#1a76c7",
  primaryColor: "#ffffff",
  success: "#4caf50",
  successDarken: "#43a047",
  successColor: "#ffffff",
  background: "#f6f6f6",
  card: "#ffffff",
  error: "#e53935",
  border: "#424242",
  text: "#080808",
};

export const colorsDark: Colors = {
  primary: "#1e88e5",
  primaryDarken: "#1a76c7",
  primaryColor: "#ffffff",
  success: "#00e676",
  successDarken: "#43a047",
  successColor: "#ffffff",
  background: "#121212",
  card: "#333333",
  error: "#e53935",
  border: "#dfdfdf",
  text: "#ffffff",
};

export const GlobalStyles = (): JSX.Element => {
  const theme = useTheme();

  const styles = css({
    html: {
      fontFamily: "GTAmerica, sans-serif",
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
      WebkitFontSmoothing: "antialiased",
    },
    button: {
      fontFamily: "inherit",
    },
    input: {
      fontFamily: "inherit",
    },
    textarea: {
      fontFamily: "inherit",
      overflow: "auto",
    },
    strong: {
      fontWeight: fontWeights.medium,
    },
    "*": {
      boxSizing: "border-box",
    },
  });

  return <Global styles={styles} />;
};

export const fontSizes = {
  h1: scale(16),
  h2: scale(8),
  h3: scale(6.25),
  h4: scale(5),
  large: scale(4.25),
  default: scale(4),
  small: scale(3.5),
  tiny: scale(3),
};

type Colors = {
  primary: string;
  primaryDarken: string;
  primaryColor: string;
  success: string;
  successDarken: string;
  successColor: string;
  background: string;
  card: string;
  error: string;
  border: string;
  text: string;
};

export type Theme = {
  colors: Colors;
};
