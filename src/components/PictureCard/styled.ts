import { colors } from "constants/colors";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  flex-basis: 30%;
`;

export const CardDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateY(50%) translateX(-50%);
  background-color: ${colors.WHITE};
  width: 87.4%;
  margin-inline: auto;
  display: flex;
  padding: 17px 24px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 1px 1px ${colors.BACKGROUND_DARK};
`;

export const PictureName = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.35px;
  font-weight: 400;
  line-height: 26.32px;
  letter-spacing: -0.01em;
  color: ${colors.ACCENT};
`;

export const CardVisibility = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.35px;
  font-weight: 700;
  line-height: 26.32px;
  letter-spacing: -0.01em;
`;

export const ImageWrapper = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  object-position: top;
`;

export const Left = styled.div`
  min-width: 0;
`;
