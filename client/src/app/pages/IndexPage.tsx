import React from 'react'

import { AddPersonForm } from '../components/person'
import { PersonList, PersonType } from '../components/person/PersonList'
import { Button } from '../components/layout/form/input'
import { AddedPerson } from '../components/person/AddPersonForm'
import { isDarkMode } from '../cache/reactiveVariables'
import { useReactiveVar } from '@apollo/client';

interface Props {
  persons: readonly Person[]
  onAddPerson: (newPerson: AddedPerson) => void
  onRemovePerson: (uuid: string) => void
}

export type Person = IsHireablePerson & PersonType


export function IndexPage({ persons, onAddPerson, onRemovePerson }: Props) {

  const isDark = useReactiveVar(isDarkMode);
  const handleToggleDark = () => {
    console.log('tussi', isDarkMode())
    isDarkMode(!isDarkMode())
  }

  const hireablePersons = persons.filter(isHireable)
  const notHireablePersons = persons.filter((person) => !isHireable(person))

  return (
    <div>
      <header>
        <h2>Here's your persons:</h2>

        {!isDark && <Button onClick={handleToggleDark}>Dark mode</Button>}

        {isDark && <Button onClick={handleToggleDark}>White mode</Button>}
      </header>

      <section>
        <h3>Add a person to list</h3>

        <AddPersonForm onSubmit={onAddPerson} />
      </section>

      <>
        <section>
          <h3>Hire perhaps?</h3>

          <PersonList persons={hireablePersons} showStats onRemovePerson={onRemovePerson} />
        </section>

        <section>
          <h3>Not going to hire</h3>

          <PersonList persons={notHireablePersons} onRemovePerson={onRemovePerson} />
        </section>
      </>
    </div>
  )
}

interface IsHireablePerson {
  age: number
}

function isHireable(person: IsHireablePerson): boolean {
  return person.age > 16
}


