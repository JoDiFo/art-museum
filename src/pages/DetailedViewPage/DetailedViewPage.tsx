import useQueryArtwork from "utils/hooks/useQueryArtwork";
import {
  StyledMain,
  StyledContent,
  StyledH2,
  PictureData,
  ImageWrapper,
  Image,
  Field,
  FieldData,
  Artist,
  Date,
  ButtonWrapper,
  ErrorMessage,
  OverviewBlock,
} from "./styled";
import { PageLoader } from "components/PageLoader";
import { useLocation } from "react-router-dom";
import useQueryArtist from "utils/hooks/useQueryArtist";
import { useState } from "react";
import { AddToFavoritesButton } from "components/ui/AddToFavoritesButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducers/favoritesReducer";

function DetailedViewPage() {
  const artworkId: number = useLocation().state.artworkId;
  const artistId: number = useLocation().state.artistId;
  const dispatch = useDispatch();
  const favoritesIds = useSelector(
    (state: RootState) => state.favoritesReducer.favorites,
  );
  const { loading, error, data: artwork } = useQueryArtwork(artworkId);
  const {
    loading: loadingArtist,
    error: errorArtist,
    data: artist,
  } = useQueryArtist(artistId);

  const [showButton, setShowButton] = useState(false);

  const handleMouseOver = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleClick = (isFavorite: boolean) => {
    dispatch({
      type: isFavorite ? "REMOVE_ARTWORK" : "ADD_ARTWORK",
      payload: artworkId,
    });
  };

  if (loading && loadingArtist) {
    return <PageLoader />;
  }

  if (error || errorArtist) {
    return (
      <StyledMain>
        <ErrorMessage>{error}</ErrorMessage>
        <ErrorMessage>{errorArtist}</ErrorMessage>
      </StyledMain>
    );
  }

  if (!artwork) {
    return <p>No data</p>;
  }

  return (
    <StyledMain>
      <StyledContent>
        <ImageWrapper
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseLeave}
        >
          <Image
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.thumbnail?.alt_text}
          />
          {showButton && (
            <ButtonWrapper>
              <AddToFavoritesButton
                isFavorite={favoritesIds.some((value) => value === artwork.id)}
                onClick={handleClick}
              />
            </ButtonWrapper>
          )}
        </ImageWrapper>
        <PictureData>
          <div>
            <StyledH2>{artwork.title}</StyledH2>
            <Artist>{artist?.title}</Artist>
            <Date>
              {artist?.birth_date}-{artist?.death_date}
            </Date>
          </div>
          <OverviewBlock>
            <StyledH2>Overview</StyledH2>
            <p>
              <Field>Artist nationality:</Field>{" "}
              <FieldData>{artwork.artist_id}</FieldData>
            </p>
            <p>
              <Field>Dimensions Sheet:</Field>{" "}
              <FieldData>{artwork.dimensions}</FieldData>
            </p>
            <p>
              <Field>Credit Line:</Field>{" "}
              <FieldData>{artwork.credit_line}</FieldData>
            </p>
            <p>
              <Field>Repository</Field>{" "}
              <FieldData>{artwork.gallery_title || "Not displayed"}</FieldData>
            </p>
            <FieldData>
              {artwork?.is_public_domain ? "Public" : "Private"}
            </FieldData>
          </OverviewBlock>
        </PictureData>
      </StyledContent>
    </StyledMain>
  );
}

export default DetailedViewPage;
