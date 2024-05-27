import useQueryArtwork from "utils/hooks/useQueryArtwork";
import { StyledMain, StyledContent, HeaderSubtext, StyledH2 } from "./styled";
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
        <div>
          <img
            src={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/843,/0/default.jpg`}
            alt={artwork?.thumbnail?.alt_text}
          />
        </div>
        <div>
          <div>
            <HeaderSubtext>{artwork?.title}</HeaderSubtext>
            <StyledH2>{artwork?.artist_title}</StyledH2>
          </div>
          <div>
            <StyledH2>Overview</StyledH2>
            <p>
              <span>Artist nationality:</span> {}
            </p>
            <p>
              <span>Dimensions Sheet:</span> {}
            </p>
            <p>
              <span>Credit Line:</span> {}
            </p>
            <p>
              <span>Repository</span> {}
            </p>
            <p>{artwork?.is_public_domain ? "Public" : "Private"}</p>
          </div>
        </div>
      </StyledContent>
    </StyledMain>
  );
}

export default DetailedViewPage;
