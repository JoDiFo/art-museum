import bookmarkIcon from "assets/orange-bookmark-icon.svg?url";
import { StyledButton, StyledImage } from "./styled";

interface IAddToFavoritesButtonProps {
  onClick: () => void;
}

export function AddToFavoritesButton({ onClick }: IAddToFavoritesButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage>
        <img src={bookmarkIcon} alt="" />
      </StyledImage>
    </StyledButton>
  );
}
