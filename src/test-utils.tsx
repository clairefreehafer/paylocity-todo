import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import { Task } from "./types";
import { render } from "@testing-library/react";
import { TaskContext } from "./TaskProvider";

export const testTasks: Task[] = [
  {
    description: "task one",
    completed: false,
    dueDate: "2025-01-01",
    id: Date.now(),
  },
  {
    description: "task two",
    completed: true,
    dueDate: "2024-09-01",
    id: Date.now() + 1,
  },
  {
    description: "task three",
    completed: true,
    dueDate: "2024-09-03",
    id: Date.now() + 2,
  },
];

export const renderTaskProvider = (
  ui: React.ReactNode,
  tasks: Task[],
  wrapper: React.JSXElementConstructor<{ children: React.ReactNode }>
) =>
  render(
    <TaskContext.Provider value={{ setTasks: () => {}, tasks }}>
      {ui}
    </TaskContext.Provider>,
    { wrapper }
  );

export function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}
