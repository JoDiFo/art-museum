import {
  Author,
  CardDescription,
  CardVisibility,
  PictureName,
  StyledCard,
  ImageWrapper,
  Image,
  Left,
} from "./styled";

import { IArtwork } from "types";
import { memo, useState } from "react";
import { AddToFavoritesButton } from "components/ui/AddToFavoritesButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducers/favoritesReducer";

interface IPictureCardProps {
  artwork: IArtwork;
}

function PictureCard({ artwork }: IPictureCardProps) {
  const dispatch = useDispatch();
  const favoritesIds = useSelector(
    (state: RootState) => state.favoritesReducer.favorites,
  );
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseOver = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  const handleClick = (isFavorite: boolean) => {
    dispatch({
      type: isFavorite ? "REMOVE_ARTWORK" : "ADD_ARTWORK",
      payload: artwork.id,
    });
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
      {showDescription && (
        <CardDescription>
          <Left>
            <PictureName>{artwork.title}</PictureName>
            <Author>{artwork.artist_title || "unknown"}</Author>
            <CardVisibility>
              {artwork.is_public_domain ? "Public" : "Private"}
            </CardVisibility>
          </Left>
          <div className="right">
            <AddToFavoritesButton
              isFavorite={favoritesIds.some((value) => value === artwork.id)}
              onClick={handleClick}
            />
          </div>
        </CardDescription>
      )}
    </StyledCard>
  );
}

export const PictureCardMemo = memo(PictureCard);
