// src/api.ts
const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function api<T = any>(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) || {}),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers,
credentials: "include",
  });

  const text = await res.text();
  try {
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) throw data ?? { message: res.statusText };
    return data as T;
  } catch (err) {
    // se non è json, rilancia l'errore
    if (!res.ok) throw { message: res.statusText };
    return text as unknown as T;
  }
}
