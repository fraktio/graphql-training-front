import styled from "@emotion/styled";
import NextLink from "next/link";
import React, { FC } from "react";

import { fontSizes } from "~/design";

const StyledLink = styled.a(({ theme }) => ({
  fontSize: fontSizes.default,
  color: theme.colors.primary,
  cursor: "pointer",
  textDecoration: "underline",
  transition: "color 0.2s",

  ":hover": {
    color: theme.colors.primary,
  },
}));

export type LinkProps = {
  href: string;
  as?: string;
  shallow?: boolean;
  className?: string;
};

export const Link: FC<LinkProps> = ({
  children,
  href,
  as,
  shallow,
  ...rest
}) => (
  <NextLink href={href} as={as} shallow={shallow} passHref>
    <StyledLink {...rest}>{children}</StyledLink>
  </NextLink>
);
