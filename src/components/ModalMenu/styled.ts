import { colors } from "constants/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: fixed;
  z-index: 1;
  inset: 0;
  display: grid;
  place-items: center;
  background: #000b;
  width: 100vw;
  height: 100dvh;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MenuItem = styled(Link)`
  color: ${colors.SECONDARY};
  font-family: "Lexend Deca", sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
`;
