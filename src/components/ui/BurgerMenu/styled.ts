import { colors } from "constants/colors";
import styled from "styled-components";

export const Menu = styled.div`
  position: relative;
  z-index: 3;
  width: 60px;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  background-color: ${colors.WHITE};
  flex-basis: 15%;
  border-radius: 5px;
`;

export const LeftHalf = styled(MenuItem)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 15%;
  transform: translateY(-50%) translateX(-50%) rotateZ(45deg);
`;

export const RightHalf = styled(MenuItem)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 15%;
  transform: translateY(-50%) translateX(-50%) rotateZ(-45deg);
`;
