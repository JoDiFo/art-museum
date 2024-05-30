import { colors } from "constants/colors";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.WHITE};
`;

export const StyledContent = styled.div`
  width: calc(100% * 2 / 3);
  display: flex;
  justify-content: space-between;

  @media (width <= 650px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
