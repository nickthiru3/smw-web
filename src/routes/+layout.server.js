// Server-side AWS Amplify configuration for SvelteKit
import { configureAmplify } from '$lib/config/amplify';

// Configure Amplify for server-side operations
// This ensures all server actions and server-side load functions have access to configured Amplify
configureAmplify();

/**
 * Server-side load function for root layout
 * This runs on the server for all routes
 */
export const load = async ({ fetch }) => {
  // Fetch aggregated service discovery config from BFF and make it available to pages
  try {
    const res = await fetch('/api/config');
    const config = res.ok ? await res.json() : null;
    return { config };
  } catch {
    // On failure, proceed without config to avoid breaking the app
    return { config: null };
  }
};
