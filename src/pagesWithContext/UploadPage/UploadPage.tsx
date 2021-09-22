import { gql, useMutation } from "@apollo/client";
import React from "react";

import { Card } from "~/atoms/Card";
import { PageContent } from "~/atoms/PageContent";
import { Section } from "~/atoms/Section";
import { FileFormValues, FileUploadForm } from "~/atoms/form/FileUploadForm";
import { H1 } from "~/atoms/typography/H1";
import { H3 } from "~/atoms/typography/H3";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { MutationWrapper } from "~/molecules/MutationWrapper";

type Response = {
  fileMetadata: {
    metadata: {
      encoding: string;
      filename: string;
      mimetype: string;
    };
  };
};

type Params = {
  file: File;
};

const uploadMutation = gql`
  mutation FileMetadata($file: Upload!) {
    fileMetadata(file: $file) {
      ... on FileMetadataSuccess {
        metadata {
          encoding
          filename
          mimetype
        }
      }

      ... on FileMetadataInvalidFile {
        message
      }
    }
  }
`;

export const UploadPage = () => {
  const [uploadMutate, uploadData] = useMutation<Response, Params>(
    uploadMutation,
  );

  const handleFile = (data: FileFormValues) => {
    if (!data?.file) {
      return;
    }

    uploadMutate({ variables: { file: data.file[0] } });
  };

  return (
    <PageContent isNarrow>
      <Section>
        <H1>Upload</H1>
      </Section>

      <Section>
        <Card>
          <H3>File Upload</H3>
          <FileUploadForm onFile={handleFile} />
        </Card>
      </Section>

      <Section>
        <H3>Upload data</H3>
        <MutationWrapper mutation={uploadData}>
          {({ fileMetadata }) => (
            <Card>
              <Paragraph>Encoding: {fileMetadata.metadata.encoding}</Paragraph>
              <Paragraph>Filename: {fileMetadata.metadata.filename}</Paragraph>
              <Paragraph>Mimetype: {fileMetadata.metadata.mimetype}</Paragraph>
            </Card>
          )}
        </MutationWrapper>
      </Section>
    </PageContent>
  );
};
