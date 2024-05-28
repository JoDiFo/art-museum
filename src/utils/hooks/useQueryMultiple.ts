import { useEffect, useState } from "react";
import { IArtwork } from "types";
import { queryArtwork } from "utils/api/queryArtwork";

export default function useQueryArtwork(artworkIds: number[]) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IArtwork[]>();

  console.log(data);

  useEffect(() => {
    queryArtwork(artworkIds)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [artworkIds]);

  return { loading, error, data };
}
