import { Global, ThemeProvider, css } from "@emotion/react";
import React from "react";

const theme = {
  colors: {
    teal: "#006A4D",
    white: "#FFFFFF",
    grey: "#F8F8F8",
    turquoise: "#6CF479",
    turquoiseShade: "#6CF479",
    red: "#FF222F",
    lilac: "#303033",
    lilacShade: "#000",
    darkPink: "#FFCCD9",
    lavenderPurple: "#C891FF"
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
  },
};

const base = import.meta.env.BASE_URL || "/";
const normalisedBase = base.endsWith("/") ? base : `${base}/`;

const globalStyles = css`
  @font-face {
    font-family: "GT Ultra";
  src: url(${normalisedBase}fonts/GTUltra-Light.otf) format("opentype");
  font-weight: 400;
    font-style: normal;
    font-display: swap;
  }


  @font-face {
    font-family: "GT Ultra";
  src: url(${normalisedBase}fonts/GTUltraMedian-Bold.otf) format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
  }

  body {
  font-family: "GT Ultra", "Inter", "Courier New", Courier, monospace;
  font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  font-family: "GT Ultra", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
  }

  p,
  a {
    font-family: "GT Ultra", sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

interface Props {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};
