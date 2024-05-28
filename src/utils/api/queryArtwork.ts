export async function queryArtwork(artworkId: number) {
  const baseUrl = "https://api.artic.edu/api/v1/artworks";
  const fieldsParam =
    "fields=id,title,artist_id,thumbnail,is_public_domain,image_id,credit_line,dimensions,gallery_title";

  const req = `${baseUrl}/${artworkId}?${fieldsParam}`;
  console.log(req);

  const res = await fetch(req);
  const data = await res.json();

  console.log(data.data);
  return data.data;
}
