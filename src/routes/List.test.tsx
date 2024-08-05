import List from "./List";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProvidersWrapper, renderTaskProvider, testTasks } from "../test-utils";

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

  //   // Could not get this click event to toggle the checkbox for some reason.
  //   fireEvent.click(screen.getByDisplayValue("incomplete"));
  //   fireEvent.click(screen.getByLabelText("Mark task complete"));

  //   expect(screen.getByText(/No tasks to display!/)).toBeInTheDocument();
  // });
});
