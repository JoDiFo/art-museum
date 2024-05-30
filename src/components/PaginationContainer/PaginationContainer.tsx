import { CardContainer } from "components/CardContainer";
import { Loader } from "components/ui/Loader";
import { Pagination } from "components/ui/Pagination";
import { memo, useState } from "react";
import useQueryArtworks from "utils/hooks/useQueryArtworks";
import { LoaderWrapper } from "./styled";

interface IPaginationContainerProps {
  searchString: string;
  sortOption: string;
}

function PaginationContainer({
  searchString,
  sortOption,
}: IPaginationContainerProps) {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQueryArtworks(searchString, page, 3);

  if (loading) {
    return (
      <>
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
        <Pagination
          currentPage={page}
          setPage={(pageNumber) => setPage(pageNumber)}
        />
      </>
    );
  }

  if (error) {
    return (
      <>
        <LoaderWrapper>
          <h1>{error}</h1>;
        </LoaderWrapper>
        <Pagination
          currentPage={page}
          setPage={(pageNumber) => setPage(pageNumber)}
        />
      </>
    );
  }

  return (
    <>
      <CardContainer
        artworks={data.sort((a, b) => {
          if (sortOption === "title") {
            return a.title.localeCompare(b.title);
          } else {
            return a.date_end - b.date_end;
          }
        })}
      />
      <Pagination
        currentPage={page}
        setPage={(pageNumber) => setPage(pageNumber)}
      />
    </>
  );
}

export const PaginationContainerMemo = memo(PaginationContainer);
