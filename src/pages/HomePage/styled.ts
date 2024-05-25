import { BACKGROUND_COLOR } from "constants/colors";
import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${BACKGROUND_COLOR};
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;
