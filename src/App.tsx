import { RouterProvider, createBrowserRouter } from "react-router-dom";
import List from "./routes/List";
import NewTask from "./routes/New";
import { Global, Theme, ThemeProvider } from "@emotion/react";
import { createContext, useState } from "react";
import { darkTheme } from "./themes";
import { Task } from "./types";
import styled from "@emotion/styled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "new",
    element: <NewTask />,
  },
]);

const globalStyles = (theme: Theme) => ({
  body: {
    backgroundColor: theme.color.background,
    color: theme.color.text,
  },
});

const AppContainer = styled.div({
  maxWidth: 750,
  width: "80%",
  margin: "1rem auto",
});

type TaskList = {
  tasks: Task[];
  setTasks: (updatedTasks: Task[]) => void;
};

export const TaskContext = createContext<TaskList>({
  tasks: [],
  setTasks: () => {},
});

const defaultTasks: Task[] = [
  {
    description: "short task",
    completed: false,
    dueDate: "2025-01-01",
    id: Date.now(),
  },
  {
    description:
      "long long long long long long long long long long long long long long long long long long task",
    completed: true,
    dueDate: "2024-09-01",
    id: Date.now() + 1,
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  return (
    <ThemeProvider theme={darkTheme}>
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <Global styles={globalStyles} />
        <AppContainer>
          <RouterProvider router={router} />
        </AppContainer>
      </TaskContext.Provider>
    </ThemeProvider>
  );
}

export default App;
