import { Input, Label, TextField } from "react-aria-components";

type Props = {
  label: React.ReactNode;
};

export default function TextInput({ label }: Props) {
  return (
    <TextField>
      <Label>{label}</Label>
      <Input />
    </TextField>
  );
}
