import React from 'react'

import { gql, useMutation } from '@apollo/client';
import { UploadFileForm, FileFormData } from '../components/file/UploadFileForm';
import { FileCard, File } from '../components/file/FileCard';

const UPLOAD_MUTATION = gql`
  mutation($file: Upload!) {
    fileMetadata(file: $file) {
      ... on FileMetadataSuccess {
        metadata {
          encoding
          filename
          mimetype
        }
      }
    }
  }
`

type FileDataResponseSuccess = {
  fileMetadata?: {
    metadata?: File
  }
}

export function IndexPage() {
  const [uploadFile, { data, error }] = useMutation<FileDataResponseSuccess>(UPLOAD_MUTATION);

  const handleUploadFile = (data: FileFormData) => {
    uploadFile({ variables: { file: data.file[0] }})
  }

  return (
    <div>
      <header>
        <h2>File upload demo:</h2>
      </header>

      <section>
        <h3>Upload file</h3>

        <UploadFileForm onSubmit={handleUploadFile} />

        <div>
          {error && "ERROR"}
          {data?.fileMetadata?.metadata && <FileCard file={data.fileMetadata.metadata} />}
        </div>
      </section>
    </div>
  )
}
