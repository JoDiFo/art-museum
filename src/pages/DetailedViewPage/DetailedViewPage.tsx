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
} from "./styled";
import { PageLoader } from "components/PageLoader";
import { useLocation } from "react-router-dom";
import useQueryArtist from "utils/hooks/useQueryArtist";

function DetailedViewPage() {
  const artworkId: number = useLocation().state.artworkId;
  const artistId: number = useLocation().state.artistId;
  const { loading, error, data: artwork } = useQueryArtwork(artworkId);
  const {
    loading: loadingArtist,
    error: errorArtist,
    data: artist,
  } = useQueryArtist(artistId);

  if (loading && loadingArtist) {
    return <PageLoader />;
  }

  if (error || errorArtist) {
    return (
      <StyledMain>
        <h1 style={{ textAlign: "center" }}>{error}</h1>
        <h1 style={{ textAlign: "center" }}>{errorArtist}</h1>
      </StyledMain>
    );
  }

  if (!artwork) {
    return <p>No data</p>;
  }

  return (
    <StyledMain>
      <StyledContent>
        <ImageWrapper>
          <Image
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.thumbnail?.alt_text}
          />
        </ImageWrapper>
        <PictureData>
          <div>
            <StyledH2>{artwork.title}</StyledH2>
            <Artist>{artist?.title}</Artist>
            <Date>
              {artist?.birth_date}-{artist?.death_date}
            </Date>
          </div>
          <div>
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
          </div>
        </PictureData>
      </StyledContent>
    </StyledMain>
  );
}

export default DetailedViewPage;
