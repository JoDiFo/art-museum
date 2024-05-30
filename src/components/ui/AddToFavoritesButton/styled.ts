import { colors } from "constants/colors";
import { styled } from "styled-components";

interface IStyledButton {
  selected: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  border-radius: 50%;
  padding: 17.5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? colors.SELECTED : colors.WHITE};
  &:hover {
    background-color: ${(props) =>
      props.selected ? colors.SELECTED_HOVER : colors.HOVER_BACKGROUND};
  }
`;

export const StyledImage = styled.div`
  width: 24px;
  height: 24px;
`;
