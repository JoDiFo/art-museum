import { CardContainer } from "components/CardContainer";
import { Loader } from "components/Loader";
import { Pagination } from "components/Pagination";
import { useState } from "react";
import useQueryArtworks from "utils/hooks/useQuery";

interface IPaginationContainerProps {
  searchString: string;
}

export function PaginationContainer({
  searchString,
}: IPaginationContainerProps) {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQueryArtworks(searchString, page, 3);

  return (
    <div>
      {error ? <p>{error}</p> : null}
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
        <CardContainer artworks={data} />
      )}
      <Pagination
        currentPage={page}
        setPage={(pageNumber) => setPage(pageNumber)}
      />
    </div>
  );
}
