import { GridListItem } from "react-aria-components";
import Checkbox from "./Checkbox";
import { Task } from "../types";
import styled from "@emotion/styled";

const StyledGridListItem = styled(GridListItem)({
  display: "flex",
  gap: "0.5rem",
});

const Description = styled.p<{ isCompleted: boolean }>(
  {},
  ({ isCompleted, theme }) =>
    isCompleted && {
      textDecoration: "line-through",
      color: theme.color.completed,
    }
);

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  return (
    <StyledGridListItem textValue={task.description}>
      <Checkbox isSelected={task.completed} />
      <Description isCompleted={task.completed}>{task.description}</Description>
    </StyledGridListItem>
  );
}
