import styled from "@emotion/styled";
import { ReactNode, forwardRef, ChangeEventHandler } from "react";

import { ErrorText } from "~/atoms/typography/ErrorText";
import { HelperText } from "~/atoms/typography/HelperText";
import { Label } from "~/atoms/typography/Label";
import { scale } from "~/design";

export const FileInputElem = styled.input({
  marginBottom: scale(1),
});

export type FileInputProps = {
  id?: string;
  isError?: boolean;
  label?: ReactNode;
  helperText?: ReactNode;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput(
    { id, isError, helperText, label, required, ...rest },
    ref,
  ) {
    return (
      <div
        css={{
          marginBottom: scale(3),
          display: "flex",
          flexDirection: "column",
        }}
      >
        {label && (
          <Label htmlFor={id}>
            {label}
            {required && (
              <ErrorText css={{ marginLeft: scale(1) }}>*</ErrorText>
            )}
          </Label>
        )}
        <FileInputElem id={id} ref={ref} type="file" {...rest} />
        <HelperText isError={isError}>{helperText}</HelperText>
      </div>
    );
  },
);
