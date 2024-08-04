import { createContext, useState } from "react";
import { Task } from "./types";

type TaskList = {
  tasks: Task[];
  setTasks: (updatedTasks: Task[]) => void;
};

export const TaskContext = createContext<TaskList>({
  tasks: [],
  setTasks: () => {},
});

// For testing purposes.
// const defaultTasks: Task[] = [
//   {
//     description: "short task",
//     completed: false,
//     dueDate: "2025-01-01",
//     id: Date.now(),
//   },
//   {
//     description:
//       "long long long long long long long long long long long long long long long long long long task",
//     completed: true,
//     dueDate: "2024-09-01",
//     id: Date.now() + 1,
//   },
// ];

export default function TaskProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
