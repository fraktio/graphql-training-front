import React from 'react'

import { styled } from '../../theme/styled'


type Props = {
  file: File;
}

export type File = {
  encoding: string;
  filename: string;
  mimetype: string;
}

export function FileCard({ file }: Props) {
  return (
    <FileCardContainer>
      <p>Encoding: {file.encoding}</p>
      <p>Filename: {file.filename}</p>
      <p>Mimetype: {file.mimetype}</p>
    </FileCardContainer>
  )
}


const FileCardContainer = styled.div((props) => ({
  border: '2px solid black',
  borderRadius: props.theme.border.radius.medium,
  padding: "10px",
  backgroundColor: "white",
}))

