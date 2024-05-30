import { memo, useRef } from "react";

import { LoadingWrapper } from "./styled";

import { SmallCardContainer } from "components/SmallCardContainer";
import useQueryArtworks from "utils/hooks/useQueryArtworks";
import { Loader } from "components/ui/Loader";

function OtherWorks() {
  const pageNumber = useRef(Math.floor(Math.random() * 100));
  const { loading, error, data } = useQueryArtworks("", pageNumber.current, 9);

  if (loading) {
    return (
      <LoadingWrapper>
        <Loader />
      </LoadingWrapper>
    );
  }

  if (error) {
    return (
      <LoadingWrapper>
        <p>{error}</p>
      </LoadingWrapper>
    );
  }

  return <SmallCardContainer artworks={data} />;
}

export const OtherWorksMemo = memo(OtherWorks);
