import styled from "@emotion/styled";
import { ButtonProps, Button as ReactAriaButton } from "react-aria-components";
import { inputStyles } from "../styles";

const StyledButton = styled(ReactAriaButton)({}, ({ theme }) =>
  inputStyles(theme)
);

/** Generic styled button component. For more detailed information, see
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
export default function Button({ children, ...buttonProps }: ButtonProps) {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
}
