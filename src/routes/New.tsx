import { Form } from "react-aria-components";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import DatePicker from "../components/DatePicker";
import { useContext } from "react";
import { TaskContext } from "../App";
import { Task } from "../types";
import styled from "@emotion/styled";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { getLocalTimeZone, today } from "@internationalized/date";

const StyledForm = styled(Form)({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "300px",
});

/** Form page for adding a new task. */
export default function NewTask() {
  const { tasks, setTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const newTask: Task = {
      id: Date.now(),
      description: data.description as string,
      dueDate: data.dueDate as string,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    navigate("/");
  }
  return (
    <>
      <Header />
      <h2>New Task</h2>
      <StyledForm onSubmit={handleSubmit}>
        <TextInput name="description" label="Description" isRequired />
        <DatePicker
          name="dueDate"
          label="Due date"
          minValue={today(getLocalTimeZone())}
          isRequired
        />
        <Button type="submit">Create</Button>
      </StyledForm>
    </>
  );
}
