import type { RequestHandler } from '@sveltejs/kit';

// Utility to build target URL for deals-ms
function targetUrl(pathname: string, search: string) {
  const base = process.env.DEALS_SERVICE_BASE_URL || 'deals'; // per user's convention
  const qs = search ? `?${search}` : '';
  // Ensure no double slashes when concatenating
  return `${base}${pathname}${qs}`.replace(/([^:]\/)\/+/, '$1/');
}

async function proxy(event: Parameters<RequestHandler>[0]) {
  const { request, url, fetch, params } = event as any;

  const headers = new Headers(request.headers);
  // Drop hop-by-hop headers
  headers.delete('host');
  headers.delete('connection');
  headers.delete('keep-alive');
  headers.delete('transfer-encoding');
  headers.delete('upgrade');
  headers.delete('proxy-authenticate');
  headers.delete('proxy-authorization');
  headers.delete('te');

  const body = request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body;

  // SvelteKit catch-all param contains the full relative path after /api/deals/
  const relativePath = params?.path ? `/${params.path}` : '/';
  const upstreamUrl = targetUrl(relativePath, url.searchParams.toString());

  const res = await fetch(upstreamUrl, {
    method: request.method,
    headers,
    body
  });

  // Pass through response
  const passHeaders = new Headers(res.headers);
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: passHeaders
  });
}

export const GET: RequestHandler = (e) => proxy(e);
export const POST: RequestHandler = (e) => proxy(e);
export const PUT: RequestHandler = (e) => proxy(e);
export const PATCH: RequestHandler = (e) => proxy(e);
export const DELETE: RequestHandler = (e) => proxy(e);
export const OPTIONS: RequestHandler = (e) => proxy(e);
