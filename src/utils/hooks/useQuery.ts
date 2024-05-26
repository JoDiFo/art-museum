import { useEffect, useState } from "react";
import { IArtwork } from "types";
import { queryArtworks } from "utils/api/queryArtworks";

export default function useQueryArtworks(
  searchString: string = "",
  page: number | null = null,
  limit: number | null = null,
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IArtwork[]>([]);

  console.log(data);

  useEffect(() => {
    queryArtworks(searchString, page, limit)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [searchString, page]);

  return { loading, error, data };
}
