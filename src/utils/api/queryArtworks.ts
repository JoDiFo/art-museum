export async function queryArtworks(
  searchString: string = "",
  page: number | null = null,
  limit: number | null = null,
) {
  const baseUrl = "https://api.artic.edu/api/v1/artworks";
  const fieldsParam = "fields=id,title,artist_title,thumbnail";
  const paginationParam =
    (page || page === 0) && limit && limit !== 0
      ? `page=${page}&limit=${limit}`
      : "";
  const searchParam = searchString ? `/search?q=${searchString}&` : "?";

  const req = `${baseUrl}${searchParam}${fieldsParam}&${paginationParam}`;
  console.log(req);

  const res = await fetch(req);
  const data = await res.json();

  console.log(data.data);
  return data.data;
}
