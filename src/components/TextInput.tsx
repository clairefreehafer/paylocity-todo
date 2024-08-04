import styled from "@emotion/styled";
import { Input, Label, TextField, TextFieldProps } from "react-aria-components";
import { inputStyles } from "../styles";

const StyledTextField = styled(TextField)({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  justifyContent: "flex-start",
});

const StyledInput = styled(Input)({}, ({ theme }) => inputStyles(theme));

interface Props extends TextFieldProps {
  label: React.ReactNode;
}

export default function TextInput({ label, ...textFieldProps }: Props) {
  return (
    <StyledTextField {...textFieldProps}>
      <Label>{label}</Label>
      <StyledInput />
    </StyledTextField>
  );
}
