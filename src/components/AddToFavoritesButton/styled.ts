import { HOVER_BACKGROUND_COLOR } from "constants/colors";
import { styled } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 50%;
  padding: 17.5px;
  background-color: ${HOVER_BACKGROUND_COLOR};
`;

export const StyledImage = styled.div`
  width: 24px;
  height: 24px;
`;