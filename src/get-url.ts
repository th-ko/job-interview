import fetch from "node-fetch";

export async function getUrl<T = any>(url: string): Promise<T> {
  const res = await fetch(url);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(res.statusText);
  }
}
