import BookmarkIcon from "assets/orange-bookmark-icon.svg";

import {
  Author,
  ButtonImg,
  CardVisibility,
  PictureName,
  SmallCardButton,
  SmallCardImage,
  SmallCardWrapper,
} from "./styled";

import { IArtwork } from "types";
import { Link } from "react-router-dom";

interface ISmallPictureCardProps {
  artwork: IArtwork;
}

export function SmallPictureCard({ artwork }: ISmallPictureCardProps) {
  return (
    <Link to={"/artwork"} state={{ artworkId: artwork.id }}>
      <SmallCardWrapper>
        <div className="image">
          <SmallCardImage
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.thumbnail?.alt_text}
          />
        </div>
        <div className="description">
          <PictureName>{artwork.title}</PictureName>
          <Author>{artwork.artist_title ?? "unknown"}</Author>
          <CardVisibility>
            {artwork.is_public_domain ? "Public" : "Private"}
          </CardVisibility>
        </div>
        <div className="button">
          <SmallCardButton>
            <ButtonImg>
              <BookmarkIcon />
            </ButtonImg>
          </SmallCardButton>
        </div>
      </SmallCardWrapper>
    </Link>
  );
}
