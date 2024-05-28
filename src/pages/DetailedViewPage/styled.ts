import { BACKGROUND_COLOR, HEADER_MD, SECONDARY_COLOR } from "constants/colors";

import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${BACKGROUND_COLOR};
`;

export const StyledContent = styled.div`
  width: calc(100% * 2 / 3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PictureData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 40%;
  height: 570px;
`;

export const ImageWrapper = styled.div`
  flex-basis: 50%;
  width: 497px;
  height: 570px;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const Artist = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  color: ${SECONDARY_COLOR};
`;

export const Date = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const StyledH2 = styled.h2`
  font: ${HEADER_MD};
`;

export const Field = styled.span`
  color: ${SECONDARY_COLOR};
  font-family: "Lexend Deca", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

export const FieldData = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
