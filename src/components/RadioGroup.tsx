import styled from "@emotion/styled";
import {
  Label,
  Radio,
  RadioGroupProps,
  RadioGroup as ReactAriaRadioGroup,
} from "react-aria-components";

const StyledReactAriaRadioGroup = styled(ReactAriaRadioGroup)({
  alignItems: "center",
  display: "flex",
  gap: "1rem",
});

const StyledRadio = styled(Radio)(
  {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",

    "&:before": {
      content: "''",
      display: "block",
      width: "1rem",
      height: "1rem",
    },
  },
  ({ theme }) => ({
    "&:before": {
      border: `2px solid ${theme.color.text}`,
      borderRadius: "100%",
    },

    "&[data-selected]:before": {
      backgroundColor: theme.color.text,
    },
  })
);

interface Props extends RadioGroupProps {
  label: string;
  options: {
    value: string;
    display: string;
  }[];
}

export default function RadioGroup({
  label,
  options,
  ...radioGroupProps
}: Props) {
  return (
    <StyledReactAriaRadioGroup {...radioGroupProps}>
      <Label>{label}</Label>
      {options.map((option) => (
        <StyledRadio key={option.value} value={option.value}>
          {option.display}
        </StyledRadio>
      ))}
    </StyledReactAriaRadioGroup>
  );
}
