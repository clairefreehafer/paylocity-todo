/** @jsxImportSource @emotion/react */

import { ButtonProps, Button as ReactAriaButton } from "react-aria-components";
import { inputStyles } from "../styles";

/** Generic styled button component.
 *
 * @see {@link https://react-spectrum.adobe.com/react-aria/Button.html| React Aria documentation}
 */
export default function Button({ children, ...buttonProps }: ButtonProps) {
  return (
    <ReactAriaButton css={inputStyles} {...buttonProps}>
      {children}
    </ReactAriaButton>
  );
}
