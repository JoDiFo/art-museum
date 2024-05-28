import { useEffect, useState } from "react";
import { IArtwork } from "types";
import { queryArtwork } from "utils/api/queryArtwork";

export default function useQueryArtwork(artworkIds: number[]) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IArtwork>();

  console.log(data);

  useEffect(() => {
    setLoading(true);
    setData({} as IArtwork);
    setError("");

    queryArtwork(artworkIds)
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
