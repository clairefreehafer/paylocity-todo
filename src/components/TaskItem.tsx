import { GridListItem } from "react-aria-components";
import Checkbox from "./Checkbox";
import { Task } from "../types";
import styled from "@emotion/styled";

const StyledGridListItem = styled(GridListItem)<{ isCompleted: boolean }>(
  {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  ({ isCompleted, theme }) =>
    isCompleted && {
      textDecoration: "line-through",
      color: theme.color.completed,
    }
);

const Group = styled.div({
  display: "flex",
  gap: "0.5rem",
});

const Description = styled.p<{ isCompleted: boolean }>(
  {},
  ({ isCompleted, theme }) =>
    isCompleted && {
      // textDecoration: "line-through",
      color: theme.color.completed,
    }
);

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  return (
    <StyledGridListItem
      textValue={task.description}
      isCompleted={task.completed}
    >
      <Group>
        <Checkbox isSelected={task.completed} />
        <Description isCompleted={task.completed}>
          {task.description}
        </Description>
      </Group>

      <p>due {new Date(task.dueDate).toLocaleDateString()}</p>
    </StyledGridListItem>
  );
}
