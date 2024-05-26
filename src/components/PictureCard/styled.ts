import {
  ACCENT_COLOR,
  HOVER_BACKGROUND_COLOR,
  WHITE_COLOR,
} from "constants/colors";

import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
`;

export const CardDescription = styled.div`
  position: relative;
  transform: translateY(-50%);
  background-color: ${WHITE_COLOR};
  width: 87.4%;
  margin-inline: auto;
  display: flex;
  padding: 17px 24px;
  justify-content: space-between;
  align-items: center;
`;

export const PictureName = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -0.03em;
`;

export const Author = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.35px;
  font-weight: 400;
  line-height: 26.32px;
  letter-spacing: -0.01em;
  color: ${ACCENT_COLOR};
`;

export const CardVisibility = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.35px;
  font-weight: 700;
  line-height: 26.32px;
  letter-spacing: -0.01em;
`;

export const StyledButton = styled.button`
  border-radius: 50%;
  padding: 17.5px;
  background-color: ${HOVER_BACKGROUND_COLOR};
`;

export const StyledImage = styled.div`
  width: 24px;
  height: 24px;
`;
