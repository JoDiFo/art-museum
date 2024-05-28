import bookmarkIcon from "assets/orange-bookmark-icon.svg?url";
import { StyledButton, StyledImage } from "./styled";

interface IAddToFavoritesButtonProps {
  isFavorite: boolean;
  onClick: (isFavorite: boolean) => void;
}

export function AddToFavoritesButton({
  isFavorite,
  onClick,
}: IAddToFavoritesButtonProps) {
  return (
    <StyledButton selected={isFavorite} onClick={() => onClick(isFavorite)}>
      <StyledImage>
        <img src={bookmarkIcon} alt="" />
      </StyledImage>
    </StyledButton>
  );
}
