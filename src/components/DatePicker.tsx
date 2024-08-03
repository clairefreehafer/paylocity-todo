import styled from "@emotion/styled";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  DatePicker as ReactAriaDatePicker,
} from "react-aria-components";

const StyledDatePicker = styled(ReactAriaDatePicker)({}, ({ theme }) => ({
  color: theme.color.text,
}));

const StyledGroup = styled(Group)({
  display: "flex",
  width: "fit-content",
  alignItems: "center",
});

const StyledDateInput = styled(DateInput)`
  border: 1px solid ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.background};
  white-space: nowrap;
  forced-color-adjust: none;
  border-radius: 6px;
  width: fit-content;
  min-width: 150px;
  padding: 4px;
  display: flex;
`;

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  border: 2px solid ${({ theme }) => theme.color.text};
  forced-color-adjust: none;
  border-radius: 4px;
  border: none;
  margin-left: -1.929rem;
  width: 1.429rem;
  height: 1.429rem;
  padding: 0;
  font-size: 0.857rem;
  box-sizing: content-box;
`;

const StyledPopover = styled(Popover)`
  border: 1px solid ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  border-radius: 6px;
  outline: none;
  max-width: 250px;
  box-shadow: 0 8px 20px #0000001a;
`;

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

type Props = {
  name: string;
  label: React.ReactNode;
};

export default function DatePicker({ name, label }: Props) {
  return (
    <StyledDatePicker name={name}>
      <Label>{label}</Label>
      <StyledGroup>
        <StyledDateInput>
          {(segment) => <DateSegment segment={segment} />}
        </StyledDateInput>
        <StyledButton>▼</StyledButton>
      </StyledGroup>
      <StyledPopover>
        <Dialog>
          <StyledCalendar>
            <StyledHeader>
              <Button slot="previous">◀</Button>
              <StyledHeading />
              <Button slot="next">▶</Button>
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
