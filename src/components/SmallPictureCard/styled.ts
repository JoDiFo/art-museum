import {
  ACCENT_COLOR,
  HOVER_BACKGROUND_COLOR,
  WHITE_COLOR,
} from "constants/colors";

import styled from "styled-components";

export const SmallCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${WHITE_COLOR};
  padding: 16px 13px;
`;

export const SmallCardImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const SmallCardButton = styled.button`
  padding: 17.54px;
  border-radius: 50%;
  background-color: ${HOVER_BACKGROUND_COLOR};
`;

export const ButtonImg = styled.div`
  width: 24px;
  height: 24px;
`;

export const PictureName = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -0.03em;
`;

export const Author = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15.35px;
  font-weight: 400;
  line-height: 26.32px;
  letter-spacing: -0.01em;
  color: ${ACCENT_COLOR};
`;

export const CardVisibility = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15.35px;
  font-weight: 700;
  line-height: 26.32px;
  letter-spacing: -0.01em;
`;