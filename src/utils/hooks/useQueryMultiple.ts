import { useEffect, useState } from "react";
import { IArtwork } from "types";
import { queryMultiple } from "utils/api/queryMultiple";

export default function useQueryArtwork(artworkIds: number[]) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IArtwork[]>();

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError("");

    queryMultiple(artworkIds)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err.message);
      });
  }, [artworkIds]);

  return { loading, error, data };
}
