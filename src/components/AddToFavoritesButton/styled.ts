import {
  HOVER_BACKGROUND_COLOR,
  SELECTED_HOVER_COLOR,
  SELECTED_COLOR,
  WHITE_COLOR,
} from "constants/colors";
import { styled } from "styled-components";

interface IStyledButton {
  selected: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  border-radius: 50%;
  padding: 17.5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? SELECTED_COLOR : WHITE_COLOR};
  &:hover {
    background-color: ${(props) =>
      props.selected ? SELECTED_HOVER_COLOR : HOVER_BACKGROUND_COLOR};
  }
`;

export const StyledImage = styled.div`
  width: 24px;
  height: 24px;
`;
