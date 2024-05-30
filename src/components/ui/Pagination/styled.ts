import { ACCENT_COLOR, WHITE_COLOR } from "constants/colors";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledSpan = styled.span`
  padding: 3px 10px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 24px;
  text-align: left;
  border-radius: 3px;
  cursor: pointer;
`;

export const SelectedSpan = styled(StyledSpan)`
  background-color: ${ACCENT_COLOR};
  color: ${WHITE_COLOR};
  font-weight: 600;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 6rem;

  @media (width <= 1200px) {
    justify-content: center;
  }
`;
