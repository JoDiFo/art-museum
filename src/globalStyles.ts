import { createGlobalStyle } from "styled-components";
import { colors } from "constants/colors";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Lexend Deca";
  src: url(./assets/fonts/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
  font-family: "Inter";
  src: url(./assets/fonts/Inter/Inter-Regular.ttf);
}

@keyframes loaderAnimation {
  0%  {
    box-shadow: 1.8rem 0 #000, -1.8rem 0 #0002;
    background: #000 
  }
  33% {
    box-shadow: 1.8rem 0 #000, -1.8rem 0 #0002;
    background: #0002
  }

  66% {
    box-shadow: 1.8rem 0 #0002, -1.8rem 0 #000; 
    background: #0002
  }
  
  100% {
    box-shadow: 1.8rem 0 #0002, -1.8rem 0 #000; 
    background: #000 
  }
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
  background-color: ${colors.BACKGROUND};
}

main {
  flex-grow: 1;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`;
