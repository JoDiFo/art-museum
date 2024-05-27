export async function queryArtwork(artworkId: number) {
  const baseUrl = "https://api.artic.edu/api/v1/artworks";
  const fieldsParam =
    "fields=id,title,artist_title,thumbnail,is_public_domain,image_id,date_end";

  const req = `${baseUrl}/${artworkId}?${fieldsParam}`;
  console.log(req);

  const res = await fetch(req);
  const data = await res.json();

  console.log(data.data);
  return data.data;
}
