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

interface ISmallPictureCardProps {
  artwork: IArtwork;
}

export function SmallPictureCard({ artwork }: ISmallPictureCardProps) {
  return (
    <SmallCardWrapper>
      <div className="image">
        <SmallCardImage
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt=""
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
  );
}
