import React, { ReactElement } from "react";

import { Button } from "~/atoms/Button";
import { ButtonsGrid } from "~/atoms/ButtonsGrid";
import { Card } from "~/atoms/Card";
import { Loading } from "~/atoms/Loading";
import { NotFound } from "~/atoms/NotFound";
import { PageContent } from "~/atoms/PageContent";
import { Section } from "~/atoms/Section";
import { UsersGrid } from "~/atoms/UsersGrid";
import { PersonForm, PersonFormValues } from "~/atoms/form/PersonForm";
import { ErrorText } from "~/atoms/typography/ErrorText";
import { H1 } from "~/atoms/typography/H1";
import { H2 } from "~/atoms/typography/H2";
import { H3 } from "~/atoms/typography/H3";
import { Label } from "~/atoms/typography/Label";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { useAllPersonsQuery } from "~/generated/graphql";
import { PersonCard } from "~/molecules/PersonCard";
import { QueryWrapper } from "~/molecules/QueryWrapper";
import { ToggleAuthenticationButton } from "~/molecules/ToggleAuthenticationButton";

export const IndexPage = (): ReactElement => {
  const query = useAllPersonsQuery();

  const handlePerson = (data: PersonFormValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <PageContent isNarrow>
      <ToggleAuthenticationButton />
      <Section>
        <H1>GRAPHQL TRAINING</H1>
        <H2>GRAPHQL TRAINING</H2>
        <H3>GRAPHQL TRAINING</H3>
        <Paragraph>GRAPHQL TRAINING</Paragraph>
        <Label>GRAPHQL TRAINING</Label>
      </Section>

      <Section>
        <Card>
          <PersonForm onPerson={handlePerson} />
        </Card>
      </Section>

      <Section>
        <ButtonsGrid>
          <Button>Button</Button>
          <Button disabled>Button</Button>
        </ButtonsGrid>
      </Section>

      <Section>
        <Loading />
        <NotFound />
        <ErrorText>Error text</ErrorText>
      </Section>

      <H3>PERSONS</H3>
      <QueryWrapper query={query}>
        {({ allPersons }) => (
          <UsersGrid>
            {allPersons.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </UsersGrid>
        )}
      </QueryWrapper>
    </PageContent>
  );
};
