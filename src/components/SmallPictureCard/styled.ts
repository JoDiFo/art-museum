import {
  ACCENT_COLOR,
  BACKGROUND_COLOR_DARK,
  WHITE_COLOR,
} from "constants/colors";

import styled from "styled-components";

export const SmallCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${WHITE_COLOR};
  padding: 16px 13px;
  box-shadow: 0px 0px 1px 1px ${BACKGROUND_COLOR_DARK};
  cursor: pointer;
`;

export const SmallCardImage = styled.img`
  width: 80px;
  height: 80px;
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
