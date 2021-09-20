import styled from "@emotion/styled";
import {
  ReactNode,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";

import { ErrorText } from "~/atoms/typography/ErrorText";
import { HelperText } from "~/atoms/typography/HelperText";
import { Label } from "~/atoms/typography/Label";
import { scale } from "~/design";

export const FileInputElem = styled.input({
  marginBottom: scale(1),
});

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  isError?: boolean;
  label?: ReactNode;
  helperText?: ReactNode;
  required?: boolean;
};

export const FileInput = forwardRef<HTMLInputElement, Props>(function TextField(
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
          {required && <ErrorText css={{ marginLeft: scale(1) }}>*</ErrorText>}
        </Label>
      )}
      <FileInputElem id={id} ref={ref} type="file" {...rest} />
      <HelperText isError={isError}>{helperText}</HelperText>
    </div>
  );
});
