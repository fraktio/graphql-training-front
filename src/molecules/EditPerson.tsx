import { ApolloCache } from "@apollo/client";
import React from "react";
import { toast } from "react-toastify";

import { Loading } from "~/atoms/Loading";
import { PersonForm, PersonHandler } from "~/atoms/form/PersonForm";
import { H3 } from "~/atoms/typography/H3";
import {
  EditPersonMutation,
  useEditPersonMutation,
  usePersonQuery,
} from "~/generated/graphql";

type Person = {
  readonly id: string;
};

type Props = {
  person: Person;
  handleOnEditPerson: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cache: ApolloCache<any>,
    data: EditPersonMutation,
  ) => void;
};

export const EditPerson = ({ person, handleOnEditPerson }: Props) => {
  const [editPersonMutation] = useEditPersonMutation({
    update: (cache, { data }) => {
      if (!data) {
        return;
      }
      handleOnEditPerson(cache, data);
    },
  });

  const { data, loading } = usePersonQuery({
    variables: { input: { id: person.id } },
    onError: () => toast.error("Failed to get person"),
  });

  const handleEditPerson: PersonHandler = (personFormValues) => {
    editPersonMutation({
      variables: {
        input: {
          id: data?.person.id,
          person: personFormValues,
        },
      },
    });
  };

  return (
    <div>
      <H3>Edit Person</H3>
      {loading && <Loading />}
      {!loading && data?.person && (
        <PersonForm
          defaultValues={{
            firstName: data.person.firstName,
            lastName: data.person.lastName,
            nationality: data.person.nationality,
            gender: data.person.gender,
            birthday: data.person.birthday.toSQLDate(),
            email: data.person.email,
            phone: data.person.phone.format("NATIONAL"),
            personalIdentityCode: data.person.personalIdentityCode,
          }}
          onPerson={handleEditPerson}
        />
      )}
    </div>
  );
};

/*
 const [addPersonMutation] = useAddPersonMutation({
    update: (cache, { data }) => {
      const newPerson = data?.addPerson;
      if (newPerson?.__typename !== "AddPersonSuccess") {
        return;
      }

      const query = cache.readQuery<NewestPersonsQuery>({
        query: NewestPersonsDocument,
      });
      if (!query) {
        return;
      }
      const { newestPersons } = query;
      cache.writeQuery({
        query: NewestPersonsDocument,
        data: {
          newestPersons: [newPerson.person, ...newestPersons],
        },
      });
    },
    */
