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

export function PictureCard() {
  return (
    <StyledCard>
      <img src={imagePlaceholder} alt="" />
      <CardDescription>
        <div className="left">
          <PictureName>Charles V, bust length...</PictureName>
          <Author>Giovanni Britto</Author>
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
