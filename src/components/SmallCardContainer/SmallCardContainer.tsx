import { SmallPictureCard } from "components/SmallPictureCard";

import { StyledWrapper } from "./styled";
import { IArtwork } from "types";
import { memo } from "react";

interface ISmallCardContainerProps {
  artworks: IArtwork[];
}

function SmallCardContainer({ artworks }: ISmallCardContainerProps) {
  return (
    <StyledWrapper>
      {artworks.map((artwork) => (
        <SmallPictureCard key={artwork.id} artwork={artwork} />
      ))}
    </StyledWrapper>
  );
}

export const SmallCardContainerMemo = memo(SmallCardContainer);
