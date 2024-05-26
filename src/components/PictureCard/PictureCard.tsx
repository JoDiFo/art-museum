import imagePlaceholder from "assets/placeholder-image.png";
import BookmarkIcon from "assets/orange-bookmark-icon.svg";

import {
  Author,
  CardDescription,
  CardVisibility,
  PictureName,
  StyledButton,
  StyledCard,
  StyledImage,
} from "./styled";

import { IArtwork } from "types";

interface IPictureCardProps {
  artwork: IArtwork;
}

export function PictureCard({ artwork }: IPictureCardProps) {
  return (
    <StyledCard>
      <img src={imagePlaceholder} alt={artwork.thumbnail?.alt_text} />
      <CardDescription>
        <div className="left">
          <PictureName>{artwork.title}</PictureName>
          <Author>{artwork.artist_title || "unknown"}</Author>
          <CardVisibility>Public</CardVisibility>
        </div>
        <div className="right">
          <StyledButton>
            <StyledImage>
              <BookmarkIcon />
            </StyledImage>
          </StyledButton>
        </div>
      </CardDescription>
    </StyledCard>
  );
}
