export async function queryArtist(artistId: number) {
  const baseUrl = "https://api.artic.edu/api/v1/agents";
  const fieldsParam = "fields=id,title,birth_date,death_date";

  const req = `${baseUrl}?ids=${artistId}&${fieldsParam}`;
  console.log(req);

  const res = await fetch(req);
  const data = await res.json();

  console.log(data.data);
  return data.data;
}
