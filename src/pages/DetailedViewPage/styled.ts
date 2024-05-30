import { colors } from "constants/colors";
import { fonts } from "constants/fonts";

import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${colors.BACKGROUND};
`;

export const StyledContent = styled.div`
  width: calc(100% * 2 / 3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (width < 1000px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const PictureData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 40%;
  height: 570px;
`;

export const ImageWrapper = styled.div`
  position: relative;
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
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 30px;
  color: ${colors.SECONDARY};
`;

export const Date = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 20px;
`;

export const StyledH2 = styled.h2`
  font: ${fonts.HEADER_MD};
`;

export const Field = styled.span`
  color: ${colors.SECONDARY};
  font-family: "Lexend Deca", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
`;

export const FieldData = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ErrorMessage = styled.h1`
  text-align: center;
`;

export const OverviewBlock = styled.div`
  margin-top: 2.5rem;
`;
