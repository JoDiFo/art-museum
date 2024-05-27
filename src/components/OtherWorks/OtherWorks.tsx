import { useRef } from "react";

import { LoadingWrapper } from "./styled";

import { SmallCardContainer } from "components/SmallCardContainer";
import useQueryArtworks from "utils/hooks/useQueryArtworks";
import { Loader } from "components/Loader";

export function OtherWorks() {
  const pageNumber = useRef(Math.floor(Math.random() * 100));
  const { loading, error, data } = useQueryArtworks("", pageNumber.current, 9);

  if (error) {
    return (
      <LoadingWrapper>
        <p>{error}</p>
      </LoadingWrapper>
    );
  }

  return (
    <>
      {loading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : (
        <SmallCardContainer artworks={data} />
      )}
    </>
  );
}
