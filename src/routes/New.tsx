import { Button, Form } from "react-aria-components";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import DatePicker from "../components/DatePicker";
import { useContext } from "react";
import { TaskContext } from "../App";
import { Task } from "../types";

export default function NewTask() {
  const { tasks, setTasks } = useContext(TaskContext);

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
  }
  return (
    <>
      <Header />
      <h2>New Task</h2>
      <Form onSubmit={handleSubmit}>
        <TextInput name="description" label="Description" />
        <DatePicker name="dueDate" label="Due date" />
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
}
