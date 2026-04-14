export function apiUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (typeof raw === 'string' && raw.trim()) {
    return `${raw.trim().replace(/\/$/, '')}${normalized}`;
  }
  return normalized;
}
