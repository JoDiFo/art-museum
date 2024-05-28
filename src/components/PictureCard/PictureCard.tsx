import {
  Author,
  CardDescription,
  CardVisibility,
  PictureName,
  StyledCard,
  ImageWrapper,
  Image,
} from "./styled";

import { IArtwork } from "types";
import { memo, useState } from "react";
import { AddToFavoritesButton } from "components/AddToFavoritesButton";
import { useDispatch } from "react-redux";

interface IPictureCardProps {
  artwork: IArtwork;
}

function PictureCard({ artwork }: IPictureCardProps) {
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseOver = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  const handleClick = () => {
    dispatch({ type: "ADD_ARTWORK", payload: artwork.id });
  };

  return (
    <StyledCard onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave}>
      <ImageWrapper
        to={`/artwork`}
        state={{ artworkId: artwork.id, artistId: artwork.artist_id }}
      >
        <Image
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.thumbnail?.alt_text}
        />
      </ImageWrapper>
      {showDescription ? (
        <CardDescription>
          <div className="left">
            <PictureName>{artwork.title}</PictureName>
            <Author>{artwork.artist_title || "unknown"}</Author>
            <CardVisibility>
              {artwork.is_public_domain ? "Public" : "Private"}
            </CardVisibility>
          </div>
          <div className="right">
            <AddToFavoritesButton onClick={handleClick} />
          </div>
        </CardDescription>
      ) : null}
    </StyledCard>
  );
}

export const PictureCardMemo = memo(PictureCard);
