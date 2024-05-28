import {
  Author,
  CardDescription,
  CardVisibility,
  PictureName,
  SmallCardImage,
  SmallCardWrapper,
} from "./styled";

import { IArtwork } from "types";
import { Link } from "react-router-dom";
import { AddToFavoritesButton } from "components/AddToFavoritesButton";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { RootState } from "store/reducers/favoritesReducer";

interface ISmallPictureCardProps {
  artwork: IArtwork;
}

function SmallPictureCard({ artwork }: ISmallPictureCardProps) {
  const dispatch = useDispatch();
  const favoritesIds = useSelector(
    (state: RootState) => state.favoritesReducer.favorites,
  );

  const handleClick = (isFavorite: boolean) => {
    dispatch({
      type: isFavorite ? "REMOVE_ARTWORK" : "ADD_ARTWORK",
      payload: artwork.id,
    });
  };

  return (
    <Link
      to={"/artwork"}
      state={{ artworkId: artwork.id, artistId: artwork.artist_id }}
    >
      <SmallCardWrapper>
        <div className="image">
          <SmallCardImage
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.thumbnail?.alt_text}
          />
        </div>
        <CardDescription>
          <PictureName>{artwork.title}</PictureName>
          <Author>{artwork.artist_title ?? "unknown"}</Author>
          <CardVisibility>
            {artwork.is_public_domain ? "Public" : "Private"}
          </CardVisibility>
        </CardDescription>
        <div className="button" onClick={(e) => e.preventDefault()}>
          <AddToFavoritesButton
            isFavorite={favoritesIds.some((value) => value === artwork.id)}
            onClick={handleClick}
          />
        </div>
      </SmallCardWrapper>
    </Link>
  );
}

export const SmallPictureCardMemo = memo(SmallPictureCard);
