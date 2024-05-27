import { SmallPictureCard } from "components/SmallPictureCard";

import { StyledWrapper } from "./styled";
import { IArtwork } from "types";

interface ISmallCardContainerProps {
  artworks: IArtwork[];
}

export function SmallCardContainer({ artworks }: ISmallCardContainerProps) {
  return (
    <StyledWrapper>
      {artworks.map((artwork) => (
        <SmallPictureCard key={artwork.id} artwork={artwork} />
      ))}
    </StyledWrapper>
  );
}
