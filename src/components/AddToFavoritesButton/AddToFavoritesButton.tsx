import BookmarkIcon from "assets/orange-bookmark-icon.svg";
import { StyledButton, StyledImage } from "./styled";

interface IAddToFavoritesButtonProps {
  onClick: () => void;
}

export function AddToFavoritesButton({ onClick }: IAddToFavoritesButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage>
        <BookmarkIcon />
      </StyledImage>
    </StyledButton>
  );
}
