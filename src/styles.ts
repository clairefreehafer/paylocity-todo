import { Theme } from "@emotion/react";

export const inputStyles = (theme: Theme) => ({
  border: `1px solid ${theme.color.text}`,
  background: theme.color.background,
  borderRadius: 6,
  color: theme.color.text,
  flex: "0 0 auto",
  fontSize: "1rem",
  padding: "0.5rem",

  "&[data-invalid]": {
    borderColor: theme.color.error,
  },
});
