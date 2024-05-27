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
import { Link } from "react-router-dom";

interface IPictureCardProps {
  artwork: IArtwork;
}

export function PictureCard({ artwork }: IPictureCardProps) {
  return (
    <StyledCard>
      <Link to={`/artwork`} state={{ artworkId: artwork.id }}>
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.thumbnail?.alt_text}
        />
      </Link>
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
