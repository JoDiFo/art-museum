import { PictureCard } from "components/PictureCard";

import { StyledWrapper } from "./styled";
import { IArtwork } from "types";

interface ICardContainerProps {
  artworks: IArtwork[];
}

export function CardContainer({ artworks }: ICardContainerProps) {
  return (
    <StyledWrapper>
      {artworks.map((artwork) => (
        <PictureCard artwork={artwork} key={artwork.id} />
      ))}
    </StyledWrapper>
  );
}
