import { useEffect, useState } from "react";
import { IDetailedArtwork } from "types";
import { queryArtwork } from "utils/api/queryArtwork";

export default function useQueryArtwork(artworkId: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IDetailedArtwork>();

  useEffect(() => {
    setLoading(true);
    setData({} as IDetailedArtwork);
    setError("");

    queryArtwork(artworkId)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err.message);
      });
  }, [artworkId]);

  return { loading, error, data };
}
