import placeholderImage from "assets/placeholder-image.png";
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
        <SmallCardImage src={placeholderImage} alt="" />
      </div>
      <div className="description">
        <PictureName>{artwork.title}</PictureName>
        <Author>{artwork.artist_title ?? "unknown"}</Author>
        <CardVisibility>Public</CardVisibility>
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
