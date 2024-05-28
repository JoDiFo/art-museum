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

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError("");
    const abortController = new AbortController();
    const signal = abortController.signal;

    queryArtworks(searchString, page, limit, signal)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err.message);
      });
  }, [searchString, page, limit]);

  return { loading, error, data };
}
