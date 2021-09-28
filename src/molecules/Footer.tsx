import styled from "@emotion/styled";
import React from "react";

import { Paragraph } from "~/atoms/typography/Paragraph";
import { scale } from "~/design";
import { ToggleAuthenticationButton } from "~/molecules/ToggleAuthenticationButton";
import { ToggleDarkModeButton } from "~/molecules/ToggleDarkModeButton";

const FooterContainer = styled.div(({ theme }) => ({
  marginTop: scale(10),
  padding: scale(20),
  paddingTop: scale(10),
  borderTop: `1px solid ${theme.colors.borderSoft}`,
  backgroundColor: theme.colors.card,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Footer = (): JSX.Element => (
  <FooterContainer>
    <ToggleAuthenticationButton />
    <ToggleDarkModeButton />

    <Paragraph>Graphql Traning Fraktio @{new Date().getFullYear()}</Paragraph>
  </FooterContainer>
);
