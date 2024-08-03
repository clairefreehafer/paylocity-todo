import { RouterProvider, createBrowserRouter } from "react-router-dom";
import List from "./routes/List";
import NewTask from "./routes/New";

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
