import { ReactElement } from "react";

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
import { useNewestPersonsQuery } from "~/generated/graphql";
import { PersonCard } from "~/molecules/PersonCard";
import { QueryWrapper } from "~/molecules/QueryWrapper";

const personDataMapper = (data: PersonFormValues) => ({
  firstName: data.firstName,
  lastName: data.lastName,
  phoneNumber: data.phone,
  email: data.email,
  birthday: data.birthday,
  nationality: data.nationality,
  gender: data.gender,
});

export const ComponentsPage = (): ReactElement => {
  const query = useNewestPersonsQuery();

  const handlePerson = (data: PersonFormValues) => {
    // eslint-disable-next-line no-console
    console.log(personDataMapper(data));
  };

  return (
    <PageContent isNarrow>
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
        {({ newestPersons }) => (
          <UsersGrid>
            {newestPersons.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </UsersGrid>
        )}
      </QueryWrapper>
    </PageContent>
  );
};
