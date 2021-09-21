import styled from "@emotion/styled";
import { ReactNode, forwardRef } from "react";

import { ErrorText } from "~/atoms/typography/ErrorText";
import { HelperText } from "~/atoms/typography/HelperText";
import { Label } from "~/atoms/typography/Label";
import { scale, fontSizes } from "~/design";

export type InputProps = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
};

export const StyledTextInput = styled.input<InputProps>(
  ({ theme }) => ({
    padding: scale(3),
    width: "100%",
    fontSize: fontSizes.default,
    backgroundColor: theme.colors.card,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: scale(2),
    color: theme.colors.text,
    marginBottom: scale(1),
  }),
  ({ error, theme }) =>
    error && {
      borderColor: theme.colors.error,
    },
  ({ disabled }) =>
    disabled && {
      cursor: "not-allowed",
      opacity: 0.6,
    },
);

interface Props {
  id: string;
  type?: "text" | "tel" | "email" | "password" | "number" | "date";
  isError?: boolean;
  label?: ReactNode;
  helperText?: ReactNode;
  name?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: string;
}

export const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
  { id, type = "text", isError, helperText, label, required, ...rest },
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
      <StyledTextInput
        id={id}
        ref={ref}
        error={isError}
        type={type}
        {...rest}
      />
      <HelperText isError={isError}>{helperText}</HelperText>
    </div>
  );
});
