import { useContext } from "react";
import { TaskContext } from "../App";
import { GridList } from "react-aria-components";
import TaskItem from "../components/TaskItem";

export default function List() {
  const { tasks, setTasks } = useContext(TaskContext);

  return (
    <GridList
      aria-label="Task list."
      items={tasks}
      renderEmptyState={() => <>No tasks to display!</>}
    >
      {(task) => <TaskItem task={task} />}
    </GridList>
  );
}
