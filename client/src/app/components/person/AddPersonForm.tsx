import React from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input } from '../layout/form/input'

import { styled } from '../../theme/styled'


interface Props {
  onSubmit: (newPerson: AddedPerson) => void
}

export interface AddedPerson {
  firstName: string
  lastName: string
  email: string
  gender: string
  birthday: string
  personalIdentityCode: string
  nationality: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  gender: string
  birthday: string
  personalIdentityCode: string
  nationality: string
}

export function AddPersonForm({ onSubmit }: Props) {
  const { register, handleSubmit, errors, reset } = useForm<FormData>()

  return (
    <AddPersonContainer>
      <form
        onSubmit={handleSubmit((data: FormData) => {
          onSubmit(data)
          reset()
        })}
      >
        <div>
          <label htmlFor="firstName">First name</label>

          <Input name="firstName" ref={register({ required: true })} placeholder="John" />

          {errors.firstName && <div>First name is required</div>}
        </div>

        <div>
          <label htmlFor="lastName">Last name</label>

          <Input name="lastName" ref={register({ required: true })} placeholder="Smith" />

          {errors.lastName && <div>Last name is required</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>

          <Input name="email" ref={register({ required: true })} placeholder="John@smith@fraktio.fi" />

          {errors.email && <div>Email name is required</div>}
        </div>

        <div>
          <label htmlFor="personalIdentityCode">PersonalIdentityCode</label>

          <Input name="personalIdentityCode" ref={register({ required: true })} placeholder="311299-9872" />

          {errors.personalIdentityCode && <div>PersonalIdentityCode name is required</div>}
        </div>

        <div>
          <label htmlFor="birthday">Birthday</label>

          <Input name="birthday" ref={register({ required: true })} placeholder="2000-01-01" />

          {errors.birthday && <div>Birthday name is required</div>}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>

          <Input name="gender" ref={register({ required: true })} placeholder="MALE, FEMALE, OTHER" />

          {errors.gender && <div>Gender name is required</div>}
        </div>

        <div>
          <label htmlFor="nationality">Nationality</label>

          <Input name="nationality" ref={register({ required: true })} placeholder="FI" />

          {errors.nationality && <div>Nationality name is required</div>}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </AddPersonContainer>
  )
}


const AddPersonContainer = styled.div((props) => ({
  border: '2px solid black',
  borderRadius: props.theme.border.radius.medium,
  padding: "10px",
  backgroundColor: "white",
}))

