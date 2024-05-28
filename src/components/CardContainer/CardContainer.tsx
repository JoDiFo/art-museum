import { PictureCard } from "components/PictureCard";

import { StyledWrapper } from "./styled";
import { IArtwork } from "types";
import { memo } from "react";

interface ICardContainerProps {
  artworks: IArtwork[];
}

function CardContainer({ artworks }: ICardContainerProps) {
  return (
    <StyledWrapper>
      {artworks.map((artwork) => (
        <PictureCard artwork={artwork} key={artwork.id} />
      ))}
    </StyledWrapper>
  );
}

export const CardContainerMemo = memo(CardContainer);
