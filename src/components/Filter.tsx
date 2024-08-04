import styled from "@emotion/styled";
import RadioGroup, { RadioGroupOption } from "./RadioGroup";
import { useEffect, useState } from "react";
import { Task } from "../types";

/** All possible filter values. */
type FilterOptions = "all" | "incomplete" | "complete";

const filterOptions: RadioGroupOption[] = [
  {
    value: "all",
    display: "All",
  },
  {
    value: "incomplete",
    display: "Incomplete",
  },
  {
    value: "complete",
    display: "Complete",
  },
];

const Container = styled.div({
  margin: "1rem 0",
  fontSize: "0.9rem",
});

type Props = {
  /** Array of all existing tasks. */
  allTasks: Task[];
  /** Function to update what tasks to display based on the selected filter.
   * (i.e. state or redux dispatch)
   */
  updateVisibleTasks: (updatedTasks: Task[]) => void;
};

/** Component that handles filtering tasks. Displays a RadioGroup of all
 * filtering options.
 */
export default function Filter({ allTasks, updateVisibleTasks }: Props) {
  const [filter, setFilter] = useState<FilterOptions>("all");

  function handleFilterChange(filterChoice: FilterOptions) {
    setFilter(filterChoice);

    if (filterChoice === "all") {
      updateVisibleTasks(allTasks);
    } else {
      const completedBoolean = filterChoice === "complete";

      const filteredTasks = allTasks.filter(
        (task) => task.completed === completedBoolean
      );
      updateVisibleTasks(filteredTasks);
    }
  }

  useEffect(() => {
    // Update displayed tasks if completed status changes.
    // NOTE: This currently runs way more often than it needs to, since
    // it is reacting to every possible change to the tasks context. With
    // more time I would optimize this.
    if (filter !== "all") {
      const completedBoolean = filter === "complete";

      const filteredTasks = allTasks.filter(
        (task) => task.completed === completedBoolean
      );
      updateVisibleTasks(filteredTasks);
    }
  }, [allTasks]);

  return (
    <Container>
      <RadioGroup
        label="Show tasks:"
        options={filterOptions}
        value={filter}
        onChange={(value) => handleFilterChange(value as FilterOptions)}
      />
    </Container>
  );
}
