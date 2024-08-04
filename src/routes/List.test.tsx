import List from "./List";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProvidersWrapper } from "../test-utils";
import { TaskContext } from "../TaskProvider";
import { Task } from "../types";

const testTasks: Task[] = [
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

const renderTaskProvider = (
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

describe("List", () => {
  it("renders appropriate text with no tasks", () => {
    renderTaskProvider(<List />, [], ProvidersWrapper);

    expect(screen.getByText(/No tasks to display!/)).toBeInTheDocument();
  });

  it("shows all tasks", () => {
    renderTaskProvider(<List />, testTasks, ProvidersWrapper);

    expect(screen.getAllByRole("row")).toHaveLength(3);
  });

  it("shows only complete tasks", () => {
    renderTaskProvider(<List />, testTasks, ProvidersWrapper);

    fireEvent.click(screen.getByDisplayValue("complete"));

    expect(screen.getAllByRole("row")).toHaveLength(2);
  });

  it("shows only incomplete tasks", () => {
    renderTaskProvider(<List />, testTasks, ProvidersWrapper);

    fireEvent.click(screen.getByDisplayValue("incomplete"));

    expect(screen.getAllByRole("row")).toHaveLength(1);
  });

  it("toggles back to showing all tasks", () => {
    renderTaskProvider(<List />, testTasks, ProvidersWrapper);

    fireEvent.click(screen.getByDisplayValue("incomplete"));
    fireEvent.click(screen.getByDisplayValue("all"));

    expect(screen.getAllByRole("row")).toHaveLength(3);
  });

  // it("marks task as complete", () => {
  //   renderTaskProvider(<List />, testTasks, ProvidersWrapper);

  //   fireEvent.click(screen.getByDisplayValue("incomplete"));
  //   fireEvent.click(screen.getByLabelText("Mark task complete"));

  //   expect(screen.getByText(/No tasks to display!/)).toBeInTheDocument();
  // });
});
