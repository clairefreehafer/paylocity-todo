import { Button, Form } from "react-aria-components";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import DatePicker from "../components/DatePicker";

export default function NewTask() {
  return (
    <>
      <Header />
      <h2>New Task</h2>
      <Form>
        <TextInput label="Description" />
        <DatePicker label="Due date" />
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
}
