import { useEffect, useState } from "react";
import { IArtist } from "types";
import { queryArtist } from "utils/api/queryArtist";

export default function useQueryArtist(artistId: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IArtist>();

  console.log(data);

  useEffect(() => {
    setLoading(true);
    setData({} as IArtist);
    setError("");

    queryArtist(artistId)
      .then((res: IArtist[]) => {
        setData(res[0]);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err.message);
      });
  }, [artistId]);

  return { loading, error, data };
}
