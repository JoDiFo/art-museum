import { createGlobalStyle } from "styled-components";
import { BACKGROUND_COLOR } from "constants/colors";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Lexend Deca";
  src: url(./assets/fonts/Lexend_Deca);
}

@font-face {
  font-family: "Inter";
  src: url(./assets/fonts/Inter);
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a { 
  text-decoration: none;
  color: inherit;
}

button {
  background-color: transparent;
  border: none;
}

img {
  display: block;
  width: 100%;
}

body {
  background-color: ${BACKGROUND_COLOR};
}
`;
