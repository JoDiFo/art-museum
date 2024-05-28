import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(25%, 1fr));
  gap: 16px;

  @media (width <= 1500px) {
    grid-template-columns: repeat(2, minmax(40%, 1fr));
  }

  @media (width <= 1000px) {
    grid-template-columns: repeat(1, minmax(90%, 1fr));
  }
`;
