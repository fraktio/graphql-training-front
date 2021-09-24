import React from "react";

import { Row } from "~/atoms/Row";
import { Section } from "~/atoms/Section";
import { H1 } from "~/atoms/typography/H1";
import { Link } from "~/atoms/typography/Link";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { scale } from "~/design";
import { ToggleAuthenticationButton } from "~/molecules/ToggleAuthenticationButton";
import { getIndexPath } from "~/paths";

type Props = {
  title: string;
  showBack?: boolean;
  showAuthentication?: boolean;
};

export const Header = ({ title, showBack, showAuthentication }: Props) => (
  <Section>
    <Row spaceBetween alignCenter>
      <div>
        <H1 css={{ marginBottom: 0 }}>{title}</H1>
        {showBack && (
          <Paragraph css={{ marginTop: scale(1), marginLeft: scale(0.5) }}>
            Go back to <Link {...getIndexPath()}>Main page</Link>
          </Paragraph>
        )}
      </div>
      {showAuthentication && <ToggleAuthenticationButton />}
    </Row>
  </Section>
);
