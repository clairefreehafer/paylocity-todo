import styled from "@emotion/styled/macro";
import { Checkbox as ReactAriaCheckbox } from "react-aria-components";

// Copied most of these styles from the react-aria docs, which is why they
// are strings when I use object styles most other places.
const CheckboxBorder = styled.div`
  width: 1.143rem;
  height: 1.143rem;
  border: 2px solid ${({ theme }) => theme.color.text};
  border-radius: 4px;
  transition: all 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCheckbox = styled(ReactAriaCheckbox)`
  display: flex;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: ${({ theme }) => theme.color.background};
  forced-color-adjust: none;

  &[data-focus-visible] ${CheckboxBorder} {
    outline: 2px solid blue;
    outline-offset: 2px;
  }

  &[data-selected],
  &[data-indeterminate] {
    ${CheckboxBorder} {
      background: white;
    }

    svg {
      stroke-dashoffset: 44;
    }
  }
`;

const Svg = styled.svg`
  width: 1rem;
  height: 1rem;
  fill: none;
  stroke: ${({ theme }) => theme.color.background};
  stroke-width: 3px;
  stroke-dasharray: 22px;
  stroke-dashoffset: 66;
  transition: all 200ms;
`;

type Props = {
  isSelected: boolean;
};

export default function Checkbox({ isSelected }: Props) {
  return (
    <StyledCheckbox slot={null} isSelected={isSelected}>
      <CheckboxBorder className="checkbox">
        <Svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </Svg>
      </CheckboxBorder>
    </StyledCheckbox>
  );
}
