import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      teal: string;
      white: string;
      grey: string;
      turquoise: string;
      turquoiseShade: string;
      red: string;
      lilac: string;
      lilacShade: string;
      darkPink: string;
      lavenderPurple: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
