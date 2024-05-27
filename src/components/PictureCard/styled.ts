import {
  ACCENT_COLOR,
  BACKGROUND_COLOR_DARK,
  HOVER_BACKGROUND_COLOR,
  WHITE_COLOR,
} from "constants/colors";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
`;

export const CardDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateY(50%) translateX(-50%);
  background-color: ${WHITE_COLOR};
  width: 87.4%;
  margin-inline: auto;
  display: flex;
  padding: 17px 24px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 1px 1px ${BACKGROUND_COLOR_DARK};
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

export const ImageWrapper = styled(Link)`
  display: block;
  width: 387px;
  height: 444px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 100%;
  object-position: top;
`;
