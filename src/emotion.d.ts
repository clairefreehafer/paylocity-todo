import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      background: string;
      text: string;
      completed: string;
      error: string;
    };
  }
}
