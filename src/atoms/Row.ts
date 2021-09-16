import styled from "@emotion/styled";

type Props = {
  center?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  alignEnd?: boolean;
  alignCenter?: boolean;
  grow?: boolean;
};

export const Row = styled.div<Props>(
  { display: "flex" },
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
  ({ grow }) =>
    grow && {
      flexGrow: 1,
    },
);
