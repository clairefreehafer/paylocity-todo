import { useContext, useState } from "react";
import { TaskContext } from "../App";
import { GridList } from "react-aria-components";
import TaskItem from "../components/TaskItem";
import Header from "../components/Header";
import Filter from "../components/Filter";

export default function List() {
  const { tasks } = useContext(TaskContext);
  const [tasksToShow, setTasksToShow] = useState(tasks);

  return (
    <>
      <Header />

      <Filter allTasks={tasks} updateTasks={setTasksToShow} />

      <GridList
        aria-label="Task list."
        items={tasksToShow}
        renderEmptyState={() => <>No tasks to display!</>}
      >
        {(task) => <TaskItem task={task} />}
      </GridList>
    </>
  );
}
