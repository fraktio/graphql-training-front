import React from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input } from '../layout/form/input'

import { styled } from '../../theme/styled'


type Props =  {
  onSubmit: (data: FileFormData) => void
}

export type FileFormData = {
  file: FileList;
}

export function UploadFileForm({ onSubmit }: Props) {
  const { register, handleSubmit, errors } = useForm<FileFormData>()

  const handleFileSubmit = (data: FileFormData) => {
    onSubmit(data)
  }

  return (
    <UploadFileContainer>
      <form
        onSubmit={handleSubmit(handleFileSubmit)}
      >
        <div>
          <label htmlFor="firstName">File</label>
          <Input type="file" name="file" ref={register({ required: true })}/>
          {errors.file && <div>File is required</div>}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </UploadFileContainer>
  )
}


const UploadFileContainer = styled.div((props) => ({
  border: '2px solid black',
  borderRadius: props.theme.border.radius.medium,
  padding: "10px",
  backgroundColor: "white",
}))

