/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import {
  FieldError,
  Input,
  Label,
  TextField,
  TextFieldProps,
} from "react-aria-components";
import { inputStyles } from "../styles";

const StyledTextField = styled(TextField)({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  justifyContent: "flex-start",
});

const StyledInput = styled(Input)({}, ({ theme }) => inputStyles(theme));

interface Props extends TextFieldProps {
  /** Label to display above text input. */
  label: React.ReactNode;
}

/** Styled text-type input element. For in-depth documentation, see
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
export default function TextInput({ label, ...textFieldProps }: Props) {
  return (
    <StyledTextField {...textFieldProps}>
      <Label>{label}</Label>
      <StyledInput />
      <FieldError css={(theme) => ({ color: theme.color.error })} />
    </StyledTextField>
  );
}
