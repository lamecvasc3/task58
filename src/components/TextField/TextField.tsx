import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";

interface TextFieldProps {
  error?: boolean;
  helperText?: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  error,
  helperText,
  placeholder,
  label,
  value,
  onChange,
}: TextFieldProps) => {
  return (
    <MuiTextField
      error={error}
      fullWidth
      color="primary"
      placeholder={placeholder}
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      helperText={helperText || ""}
      onChange={onChange}
      variant="outlined"
      required
    />
  );
};
