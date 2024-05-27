import useQueryArtwork from "utils/hooks/useQueryArtwork";
import {
  StyledMain,
  StyledContent,
  HeaderSubtext,
  StyledH2,
  PictureData,
  ImageWrapper,
  Image,
  Field,
} from "./styled";
import { PageLoader } from "components/PageLoader";
import { useLocation } from "react-router-dom";

function DetailedViewPage() {
  const artworkId = useLocation().state.artworkId;
  const { loading, error, data: artwork } = useQueryArtwork(artworkId);

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <StyledMain>{error}</StyledMain>;
  }

  return (
    <StyledMain>
      <StyledContent>
        <ImageWrapper>
          <Image
            src={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/843,/0/default.jpg`}
            alt={artwork?.thumbnail?.alt_text}
          />
        </ImageWrapper>
        <PictureData>
          <div>
            <StyledH2>{artwork?.artist_title}</StyledH2>
            <HeaderSubtext>{artwork?.title}</HeaderSubtext>
            <HeaderSubtext>1459</HeaderSubtext>
          </div>
          <div>
            <StyledH2>Overview</StyledH2>
            <p>
              <Field>Artist nationality:</Field> {}
            </p>
            <p>
              <Field>Dimensions Sheet:</Field> {}
            </p>
            <p>
              <Field>Credit Line:</Field> {}
            </p>
            <p>
              <Field>Repository</Field> {}
            </p>
            <p>{artwork?.is_public_domain ? "Public" : "Private"}</p>
          </div>
        </PictureData>
      </StyledContent>
    </StyledMain>
  );
}

export default DetailedViewPage;
