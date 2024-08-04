import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";

export function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}
