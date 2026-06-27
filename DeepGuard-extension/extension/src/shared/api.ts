// API helpers to call the DeepGuard backend from the service worker

const BASE_URL = "http://127.0.0.1:8000/analyze";

export async function analyzeImageBase64(base64: string) {
  const res = await fetch(`${BASE_URL}/image-base64`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: base64, mime: "image/png" }),
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
