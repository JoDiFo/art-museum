import { useEffect, useState } from "react";
import { IArtwork } from "types";
import { queryArtwork } from "utils/api/queryArtwork";

export default function useQueryArtwork(artworkId: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IArtwork>();

  console.log(data);

  useEffect(() => {
    queryArtwork(artworkId)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [artworkId]);

  return { loading, error, data };
}
