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

type DotProps = {
  usePrimaryColor?: boolean;
};

const FlashingDot = styled.div<DotProps>(
  ({ theme }) => ({
    opacity: 0,
    marginRight: 2,
    marginLeft: 2,
    width: 14,
    height: 14,
    borderRadius: "100%",
    backgroundColor: theme.colors.primary,
    color: theme.colors.primary,
    animation: `${dotFlashingColored} 1.5s infinite linear`,
  }),
  ({ theme, usePrimaryColor }) => ({
    backgroundColor: usePrimaryColor
      ? theme.colors.primaryColor
      : theme.colors.primary,
  }),
);

const Flashing = styled.div({
  display: "flex",
});

type Props = DotProps & {
  className?: string;
};

export const LoadingIcon = ({
  className,
  usePrimaryColor,
}: Props): ReactElement => (
  <Flashing className={className}>
    <FlashingDot
      usePrimaryColor={usePrimaryColor}
      css={{ animationDelay: "0s" }}
    />
    <FlashingDot
      usePrimaryColor={usePrimaryColor}
      css={{ animationDelay: "0.5s" }}
    />
    <FlashingDot
      usePrimaryColor={usePrimaryColor}
      css={{ animationDelay: "1s" }}
    />
  </Flashing>
);
