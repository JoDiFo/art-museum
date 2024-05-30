import { colors } from "constants/colors";

import styled from "styled-components";

export const SmallCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${colors.WHITE};
  padding: 16px 13px;
  box-shadow: 0px 0px 1px 1px ${colors.BACKGROUND_DARK};
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15.35px;
  font-weight: 400;
  line-height: 26.32px;
  letter-spacing: -0.01em;
  color: ${colors.ACCENT};
`;

export const CardVisibility = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15.35px;
  font-weight: 700;
  line-height: 26.32px;
  letter-spacing: -0.01em;
`;

export const CardDescription = styled.div`
  flex-grow: 1;
  min-width: 0;
`;
