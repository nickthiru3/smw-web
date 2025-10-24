// Cached config aggregator for per-service bindings (served under /api/config)
import { env } from '$env/dynamic/private';
import type { RequestHandler } from '@sveltejs/kit';

const TTL_MS = 5 * 60 * 1000; // 5 minutes

type ServiceKey = 'users' | 'deals';

type ServiceConfig = {
	key: ServiceKey;
	bindingsEnv: string;
	baseEnv: string;
};

type ServiceResult = {
	key: ServiceKey;
	ok: boolean;
	url?: string;
	data?: unknown;
	error?: string;
};

type AggregatedConfig = {
	services: Record<string, unknown>;
	meta: {
		fetchedAt: string;
		sources: Record<string, string | null>;
	};
	errors?: { key: ServiceKey; message: string }[];
};

let cache: { data: AggregatedConfig; expiresAt: number } | null = null;

const SERVICES: ServiceConfig[] = [
	{ key: 'users', bindingsEnv: 'USERS_BINDINGS_URL', baseEnv: 'USERS_SERVICE_BASE_URL' },
	{ key: 'deals', bindingsEnv: 'DEALS_BINDINGS_URL', baseEnv: 'DEALS_SERVICE_BASE_URL' }
];

function resolveBindingsUrl(service: ServiceConfig): { url: string | null; reason?: string } {
	const explicit = env[service.bindingsEnv];
	if (explicit) {
		return { url: explicit };
	}

	const base = env[service.baseEnv];
	if (base) {
		const sanitizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
		return { url: `${sanitizedBase}/.well-known/bindings` };
	}

	return {
		url: null,
		reason: `Missing env ${service.bindingsEnv} or ${service.baseEnv}`
	};
}

async function fetchBindings(
	service: ServiceConfig,
	fetchImpl: typeof fetch
): Promise<ServiceResult> {
	const { url, reason } = resolveBindingsUrl(service);
	if (!url) {
		return { key: service.key, ok: false, error: reason };
	}

	try {
		const res = await fetchImpl(url, { headers: { accept: 'application/json' } });
		if (!res.ok) {
			return {
				key: service.key,
				ok: false,
				url,
				error: `Upstream returned ${res.status}`
			};
		}
		const json = await res.json();
		return { key: service.key, ok: true, url, data: json };
	} catch (error) {
		return {
			key: service.key,
			ok: false,
			url,
			error: error instanceof Error ? error.message : 'Unknown fetch error'
		};
	}
}

export const GET: RequestHandler = async ({ fetch }) => {
	const now = Date.now();
	if (cache && cache.expiresAt > now) {
		return new Response(JSON.stringify(cache.data), {
			headers: { 'content-type': 'application/json' }
		});
	}

	const results = await Promise.all(SERVICES.map((service) => fetchBindings(service, fetch)));
	const services: Record<string, unknown> = {};
	const sources: Record<string, string | null> = {};
	const errors: { key: ServiceKey; message: string }[] = [];

	for (const result of results) {
		sources[result.key] = result.url ?? null;
		if (result.ok) {
			services[result.key] = result.data ?? null;
		} else if (result.error) {
			errors.push({ key: result.key, message: result.error });
		}
	}

	const aggregated: AggregatedConfig = {
		services,
		meta: {
			fetchedAt: new Date().toISOString(),
			sources
		}
	};

	if (errors.length > 0) {
		aggregated.errors = errors;
	}

	cache = { data: aggregated, expiresAt: now + TTL_MS };

	return new Response(JSON.stringify(aggregated), {
		headers: { 'content-type': 'application/json' }
	});
};
