import styled from "@emotion/styled";

type Props = {
  center?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  alignEnd?: boolean;
  alignCenter?: boolean;
};

export const Column = styled.div<Props>(
  {
    display: "flex",
    flexDirection: "column",
  },
  ({ center }) =>
    center && {
      justifyContent: "center",
    },
  ({ spaceBetween }) =>
    spaceBetween && {
      justifyContent: "space-between",
    },
  ({ spaceAround }) =>
    spaceAround && {
      justifyContent: "space-around",
    },
  ({ alignEnd }) =>
    alignEnd && {
      justifyContent: "flex-end",
    },
  ({ alignCenter }) =>
    alignCenter && {
      alignItems: "center",
    },
);
