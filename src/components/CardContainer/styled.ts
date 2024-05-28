import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 444px;
  height: max-content;

  @media (width <= 700px) {
    flex-direction: column;
    max-height: none;
    gap: 1.4rem;
  }
`;
