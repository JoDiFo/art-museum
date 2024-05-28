export async function queryArtworks(
  searchString: string = "",
  page: number | null = null,
  limit: number | null = null,
  signal: AbortSignal,
) {
  const baseUrl = "https://api.artic.edu/api/v1/artworks";
  const fieldsParam =
    "fields=id,title,artist_id,artist_title,thumbnail,is_public_domain,image_id,date_end";

  const paginationParam =
    (page || page === 0) && limit && limit !== 0
      ? `page=${page}&limit=${limit}`
      : "";

  const searchParam = searchString ? `/search?q=${searchString}&` : "?";

  const req = `${baseUrl}${searchParam}${fieldsParam}&${paginationParam}`;

  const res = await fetch(req, { signal });
  const data = await res.json();

  return data.data;
}
