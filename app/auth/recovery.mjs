// Public browser configuration; never use a service-role key here.
const authUrl = "https://nrtprxhkvsjcnqkrfrpi.supabase.co/auth/v1";
const publicKey = "sb_publishable_zqzQScZuBsEwO9Jo1NfJJg_SpQRbzjI";

export function readRecoveryLink(href) {
  const url = new URL(href);
  const params = new URLSearchParams(url.search);
  new URLSearchParams(url.hash.slice(1)).forEach((value, key) => params.set(key, value));
  if (params.has("error") || params.has("error_description") || params.get("type") !== "recovery") return null;
  return params.get("access_token") || null;
}

export function passwordError(password, confirmation) {
  if (password.length < 8) return "weak_password";
  if (password !== confirmation) return "mismatch";
  return null;
}

export async function recoveryRequest(token, { password, signal, fetcher = fetch } = {}) {
  if (!token) throw new Error("invalid_link");
  const response = await fetcher(`${authUrl}/user`, {
    method: password === undefined ? "GET" : "PUT",
    headers: { apikey: publicKey, Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    ...(password === undefined ? {} : { body: JSON.stringify({ password }) }),
    cache: "no-store",
    referrerPolicy: "no-referrer",
    signal,
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    const code = body.error_code;
    if (response.status === 401 || response.status === 403) throw new Error("invalid_link");
    if (code === "weak_password" || code === "same_password") throw new Error(code);
    throw new Error("request_failed");
  }
  return response.json();
}
