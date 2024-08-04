import styled from "@emotion/styled/macro";
import {
  CheckboxProps,
  Checkbox as ReactAriaCheckbox,
} from "react-aria-components";

const CheckboxBorder = styled.div(
  {
    alignItems: "center",
    borderRadius: "4px",
    display: "flex",
    height: "1.25rem",
    justifyContent: "center",
    width: "1.25rem",
  },
  ({ theme }) => ({
    border: `2px solid ${theme.color.text}`,
  })
);

const StyledCheckbox = styled(ReactAriaCheckbox)(
  {
    alignItems: "center",
    display: "flex",
    fontSize: "0.5rem",
  },
  ({ theme }) => ({
    color: theme.color.background,

    "&[data-selected]": {
      [`${CheckboxBorder}`]: {
        backgroundColor: theme.color.text,
      },
      svg: {
        strokeDashoffset: 44,
      },
    },
  })
);

const Svg = styled.svg(
  {
    height: "1rem",
    width: "1rem",
    fill: "none",
    strokeWidth: 3,
    strokeDasharray: 22,
    strokeDashoffset: 66,
    transition: "all 200ms",
  },
  ({ theme }) => ({
    stroke: theme.color.background,
  })
);

interface Props extends CheckboxProps {}

export default function Checkbox(checkboxProps: Props) {
  return (
    <StyledCheckbox slot={null} {...checkboxProps}>
      <CheckboxBorder className="checkbox">
        <Svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </Svg>
      </CheckboxBorder>
    </StyledCheckbox>
  );
}
