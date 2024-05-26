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

export function SmallPictureCard() {
  return (
    <SmallCardWrapper>
      <div className="image">
        <SmallCardImage src={placeholderImage} alt="" />
      </div>
      <div className="description">
        <PictureName>Charles V, bust length...</PictureName>
        <Author>Giovanni Britto</Author>
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
