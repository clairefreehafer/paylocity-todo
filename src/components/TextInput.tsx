import { Input, Label, TextField } from "react-aria-components";

type Props = {
  name: string;
  label: React.ReactNode;
};

export default function TextInput({ name, label }: Props) {
  return (
    <TextField name={name}>
      <Label>{label}</Label>
      <Input />
    </TextField>
  );
}
