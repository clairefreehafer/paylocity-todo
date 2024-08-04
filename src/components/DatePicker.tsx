/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePickerProps,
  DateSegment,
  DateValue,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  DatePicker as ReactAriaDatePicker,
} from "react-aria-components";
import { inputStyles } from "../styles";

const StyledDatePicker = styled(ReactAriaDatePicker)(
  {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    justifyContent: "flex-start",
  },
  ({ theme }) => ({
    color: theme.color.text,
  })
);

const StyledGroup = styled(Group)({
  display: "flex",
  width: "fit-content",
  alignItems: "center",
});

const StyledDateInput = styled(DateInput)(
  {
    display: "flex",
    minWidth: "150px",
    whiteSpace: "nowrap",
    width: "fit-content",
  },
  ({ theme }) => inputStyles(theme)
);

const ArrowButton = styled(Button)(
  {
    border: "none",
  },
  ({ theme }) => ({
    background: theme.color.background,
    color: theme.color.text,
  })
);

const StyledPopover = styled(Popover)({}, ({ theme }) => inputStyles(theme));

const StyledHeader = styled.header({
  alignItems: "center",
  margin: "1rem",
  display: "flex",
  justifyContent: "space-between",
});

const StyledHeading = styled(Heading)({
  margin: 0,
  fontSize: "1.2rem",
});

const StyledCalendar = styled(Calendar)({
  width: "fit-content",
  maxWidth: "100%",
});

const StyledCalendarGrid = styled(CalendarGrid)({
  padding: "1rem",
  width: "100%",
});

const StyledCalendarCell = styled(CalendarCell)({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  padding: "0.25rem",
});

interface Props extends DatePickerProps<DateValue> {
  label: React.ReactNode;
}

export default function DatePicker({ label, ...datePickerProps }: Props) {
  return (
    <StyledDatePicker {...datePickerProps}>
      <Label>{label}</Label>
      <StyledGroup>
        <StyledDateInput>
          {(segment) => <DateSegment segment={segment} />}
        </StyledDateInput>
        <ArrowButton css={{ marginLeft: "-1.9rem" }}>▼</ArrowButton>
      </StyledGroup>
      <StyledPopover>
        <Dialog>
          <StyledCalendar>
            <StyledHeader>
              <ArrowButton slot="previous">◀</ArrowButton>
              <StyledHeading />
              <ArrowButton slot="next">▶</ArrowButton>
            </StyledHeader>
            <StyledCalendarGrid>
              {(date) => <StyledCalendarCell date={date} />}
            </StyledCalendarGrid>
          </StyledCalendar>
        </Dialog>
      </StyledPopover>
    </StyledDatePicker>
  );
}
