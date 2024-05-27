import { SmallPictureCard } from "components/SmallPictureCard";

import { StyledWrapper } from "./styled";
import useQueryArtworks from "utils/hooks/useQueryArtworks";
import { Loader } from "components/Loader";
import { useRef } from "react";

export function SmallCardContainer() {
  const pageNumber = useRef(Math.floor(Math.random() * 100));
  const { loading, error, data } = useQueryArtworks("", pageNumber.current, 9);

  if (error) {
    return (
      <StyledWrapper>
        <p>{error}</p>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      {loading ? (
        <div
          style={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          {data.map((artwork) => (
            <SmallPictureCard key={artwork.id} artwork={artwork} />
          ))}
        </>
      )}
    </StyledWrapper>
  );
}
