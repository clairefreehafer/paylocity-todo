import { RouterProvider, createBrowserRouter } from "react-router-dom";
import List from "./routes/List";
import NewTask from "./routes/New";
import { Global, Theme, ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes";
import styled from "@emotion/styled";
import TaskProvider from "./TaskProvider";

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

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TaskProvider>
        <Global styles={globalStyles} />
        <AppContainer>
          <RouterProvider router={router} />
        </AppContainer>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
