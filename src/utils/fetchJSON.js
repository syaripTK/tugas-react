export async function fetchJson(url) {
  const res = await fetch(url);

  if (!res) throw new Error(`Gagal fetching data dari ${url}`);

  return res.json();
}
