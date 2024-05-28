export async function queryArtwork(artworkIds: number[]) {
  const baseUrl = "https://api.artic.edu/api/v1/artworks";
  const fieldsParam =
    "fields=id,title,artist_title,thumbnail,is_public_domain,image_id,date_end";

  const idParam =
    artworkIds.length > 1 ? `?ids=${artworkIds}&` : `/${artworkIds[0]}?`;

  const req = `${baseUrl}${idParam}${fieldsParam}`;
  console.log(req);

  const res = await fetch(req);
  const data = await res.json();

  console.log(data.data);
  return data.data;
}
