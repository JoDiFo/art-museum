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
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.thumbnail?.alt_text}
      />
      <CardDescription>
        <div className="left">
          <PictureName>{artwork.title}</PictureName>
          <Author>{artwork.artist_title || "unknown"}</Author>
          <CardVisibility>
            {artwork.is_public_domain ? "Public" : "Private"}
          </CardVisibility>
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
