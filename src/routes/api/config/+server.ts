// Cached config aggregator for per-service bindings (served under /api/config)
import type { RequestHandler } from '@sveltejs/kit';

const TTL_MS = 5 * 60 * 1000; // 5 minutes

let cache: { data: any; expiresAt: number } | null = null;

function getBaseUrls() {
  // Allow env overrides; default to service domain paths per user's convention
  const usersBase = process.env.USERS_SERVICE_BASE_URL || 'users';
  const dealsBase = process.env.DEALS_SERVICE_BASE_URL || 'deals';
  return { usersBase, dealsBase };
}

async function fetchJson(url: string, fetchImpl: typeof fetch) {
  const res = await fetchImpl(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

export const GET: RequestHandler = async ({ fetch }) => {
  const now = Date.now();
  if (cache && cache.expiresAt > now) {
    return new Response(JSON.stringify(cache.data), {
      headers: { 'content-type': 'application/json' }
    });
  }

  const { usersBase, dealsBase } = getBaseUrls();

  // Using /.well-known/bindings (no .json) per agreed convention
  const usersUrl = `${usersBase}/.well-known/bindings`;
  const dealsUrl = `${dealsBase}/.well-known/bindings`;

  const [usersBindings, dealsBindings] = await Promise.all([
    fetchJson(usersUrl, fetch),
    fetchJson(dealsUrl, fetch)
  ]);

  const aggregated = {
    users: usersBindings,
    deals: dealsBindings,
    fetchedAt: new Date().toISOString()
  };
  cache = { data: aggregated, expiresAt: now + TTL_MS };

  return new Response(JSON.stringify(aggregated), {
    headers: { 'content-type': 'application/json' }
  });
};
