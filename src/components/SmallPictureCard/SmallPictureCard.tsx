import {
  Author,
  CardVisibility,
  PictureName,
  SmallCardImage,
  SmallCardWrapper,
} from "./styled";

import { IArtwork } from "types";
import { Link } from "react-router-dom";
import { AddToFavoritesButton } from "components/AddToFavoritesButton";
import { useDispatch } from "react-redux";

interface ISmallPictureCardProps {
  artwork: IArtwork;
}

export function SmallPictureCard({ artwork }: ISmallPictureCardProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "ADD_ARTWORK", payload: artwork.id });
  };

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
          <AddToFavoritesButton onClick={handleClick} />
        </div>
      </SmallCardWrapper>
    </Link>
  );
}
