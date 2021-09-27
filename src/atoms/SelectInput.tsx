import React, {
  ChangeEvent,
  DetailedHTMLProps,
  ReactNode,
  SelectHTMLAttributes,
  forwardRef,
} from "react";

import { Option } from "~/atoms/Option";
import { Select } from "~/atoms/Select";
import { ErrorText } from "~/atoms/typography/ErrorText";
import { HelperText } from "~/atoms/typography/HelperText";
import { Label } from "~/atoms/typography/Label";
import { scale } from "~/design";

type Props = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  id: string;
  isError?: boolean;
  label?: ReactNode;
  helperText?: ReactNode;
  required?: boolean;
  name?: string;
  options: Option[];
  onOption?: (option: Option) => void;
};

export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

export const SelectInput = forwardRef<HTMLSelectElement, Props>(
  function SelectInput(
    {
      options,
      onOption,
      label,
      id,
      required,
      isError,
      helperText,
      onChange,
      ...rest
    }: Props,
    ref,
  ) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e);
      }

      if (!onOption) {
        return;
      }

      const { value } = e.target;
      const option = options.find((opt) => opt.value === value);

      if (!option) {
        return;
      }

      onOption(option);
    };

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
        <Select ref={ref} onChange={handleChange} error={isError} {...rest}>
          {options.map((option) => (
            <Option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </Option>
          ))}
        </Select>
        <HelperText isError={isError}>{helperText}</HelperText>
      </div>
    );
  },
);
