import React, { ReactElement } from "react";

import { PageContent } from "~/atoms/PageContent";
import { H3 } from "~/atoms/typography/H3";
import { Link } from "~/atoms/typography/Link";
import { Paragraph } from "~/atoms/typography/Paragraph";
import { Ul } from "~/atoms/typography/Ul";
import { TrainingHeader } from "~/molecules/TraininHeader";
import {
  getDirectCachePath,
  getPaginationPath,
  getPersonsPath,
  getUploadPath,
} from "~/paths";

export const IndexPage = (): ReactElement => (
  <PageContent isNarrow>
    <TrainingHeader />

    <H3>Contents</H3>
    <Ul>
      <li>
        <Paragraph>Exercises 1-6</Paragraph>
        <Ul>
          <li>
            <Link {...getPersonsPath()}>Persons page</Link>
          </li>
        </Ul>
      </li>

      <li>
        <Paragraph>Cache demo</Paragraph>
        <Ul>
          <li>
            <Link {...getDirectCachePath()}>Cache demo</Link>
          </li>
        </Ul>
      </li>

      <li>
        <Paragraph>Upload demo</Paragraph>
        <Ul aria-label="Upload demo">
          <li>
            <Link {...getUploadPath()}>Upload demo</Link>
          </li>
        </Ul>
      </li>

      <li>
        <Paragraph>Pagination demo</Paragraph>
        <Ul aria-label="Pagination demo">
          <li>
            <Link {...getPaginationPath()}>Pagination demo</Link>
          </li>
        </Ul>
      </li>
    </Ul>
  </PageContent>
);
