import React from "react";
import { Global, css } from "@emotion/react";
import { theme } from "./theme";

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html {
        font-family: ${theme.fonts.sansSerif};
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        width: 100%;
        height: 100%;
      }
      body {
        margin: 0;
        font-family: ${theme.fonts.sansSerif};
        width: 100vw !important;
        max-width: 100% !important;
        overflow: hidden !important;
        overflow-y: scroll !important;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: ${theme.fonts.serif};
        font-weight: 400;
      }
    `}
  />
);

export default GlobalStyle;
