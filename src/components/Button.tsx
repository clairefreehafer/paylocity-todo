import styled from "@emotion/styled";
import { ButtonProps, Button as ReactAriaButton } from "react-aria-components";
import { inputStyles } from "../styles";

const StyledButton = styled(ReactAriaButton)({}, ({ theme }) =>
  inputStyles(theme)
);

interface Props extends ButtonProps {}

export default function Button({ children, ...buttonProps }: Props) {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
}
