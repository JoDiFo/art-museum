export async function queryMultiple(artworkIds: number[]) {
  const baseUrl = "https://api.artic.edu/api/v1/artworks";
  const fieldsParam =
    "fields=id,title,artist_id,artist_title,thumbnail,is_public_domain,image_id,date_end";

  const idParam =
    artworkIds.length > 1 ? `?ids=${artworkIds}&` : `/${artworkIds[0]}?`;

  const req = `${baseUrl}${idParam}${fieldsParam}`;

  const res = await fetch(req);
  const data = await res.json();

  return data.data;
}
