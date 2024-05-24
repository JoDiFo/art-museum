import { createGlobalStyle } from "styled-components";
import { BACKGROUND_COLOR } from "./constants/colors";

export const GlobalStyles = createGlobalStyle`
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

body {
  background-color: ${BACKGROUND_COLOR};
}
`;
