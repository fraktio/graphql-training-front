import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactElement } from "react";

const dotFlashingColored = keyframes({
  "0%": {
    opacity: 0,
  },
  "25%": {
    opacity: 1,
  },
  "50%, 100%": {
    opacity: 0,
  },
});

const FlashingDot = styled.div(({ theme }) => ({
  opacity: 0,
  marginRight: 2,
  marginLeft: 2,
  width: 14,
  height: 14,
  borderRadius: "100%",
  backgroundColor: theme.colors.primary,
  color: theme.colors.primary,
  animation: `${dotFlashingColored} 1.5s infinite linear`,
}));

const Flashing = styled.div({
  display: "flex",
});

type Props = {
  className?: string;
};

export const LoadingIcon = ({ className }: Props): ReactElement => (
  <Flashing className={className}>
    <FlashingDot css={{ animationDelay: "0s" }} />
    <FlashingDot css={{ animationDelay: "0.5s" }} />
    <FlashingDot css={{ animationDelay: "1s" }} />
  </Flashing>
);
