import styled from "styled-components";
import { HEADER_BACKGROUND, WHITE_COLOR } from "../../constants/colors";

export const StyledHeader = styled.header`
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${HEADER_BACKGROUND};
  color: ${WHITE_COLOR};
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
`;

export const Content = styled.div`
  width: calc(100% * 2 / 3);
  display: flex;
  justify-content: space-between;
`;

export const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
`;
