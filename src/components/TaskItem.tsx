import { GridListItem } from "react-aria-components";
import Checkbox from "./Checkbox";
import { Task } from "../types";
import styled from "@emotion/styled";
import { useContext } from "react";
import { TaskContext } from "../App";

const StyledGridListItem = styled(GridListItem)<{ $isCompleted: boolean }>(
  {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  ({ $isCompleted, theme }) =>
    $isCompleted && {
      textDecoration: "line-through",
      color: theme.color.completed,
    }
);

const Group = styled.div({
  display: "flex",
  gap: "0.5rem",
});

const Description = styled.p<{ $isCompleted: boolean }>(
  {},
  ({ $isCompleted, theme }) =>
    $isCompleted && {
      // textDecoration: "line-through",
      color: theme.color.completed,
    }
);

const Due = styled.p({
  minWidth: 120,
});

type Props = {
  /** Task data to display. */
  task: Task;
};

/** Styled component to display Task info. Includes Checkbox for status,
 * task description, and due date.
 */
export default function TaskItem({ task }: Props) {
  const { tasks, setTasks } = useContext(TaskContext);

  function handleTaskStatus(idOfUpdatedTask: number) {
    const indexOfUpdatedTask = tasks.findIndex(
      (task) => task.id === idOfUpdatedTask
    );
    const updatedTasks = [...tasks];
    const taskToUpdate = updatedTasks[indexOfUpdatedTask];

    taskToUpdate.completed = !taskToUpdate.completed;

    setTasks(updatedTasks);
  }

  return (
    <StyledGridListItem
      textValue={task.description}
      $isCompleted={task.completed}
    >
      <Group>
        <Checkbox
          isSelected={task.completed}
          onChange={() => handleTaskStatus(task.id)}
          slot="selection"
        />
        <Description $isCompleted={task.completed}>
          {task.description}
        </Description>
      </Group>

      <Due>due {new Date(task.dueDate).toLocaleDateString()}</Due>
    </StyledGridListItem>
  );
}
