import styled from "@emotion/styled";
import RadioGroup from "./RadioGroup";
import { useState } from "react";
import { Task } from "../types";

type FilterOptions = "all" | "incomplete" | "complete";

const filterOptions = [
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
  allTasks: Task[];
  updateTasks: (updatedTasks: Task[]) => void;
};

export default function Filter({ allTasks, updateTasks }: Props) {
  const [filter, setFilter] = useState<FilterOptions>("all");

  function handleFilterChange(filterChoice: FilterOptions) {
    setFilter(filterChoice);

    if (filterChoice === "all") {
      updateTasks(allTasks);
    } else {
      const completedBoolean = filterChoice === "complete";

      const filteredTasks = allTasks.filter(
        (task) => task.completed === completedBoolean
      );
      updateTasks(filteredTasks);
    }
  }

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
