import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	// Enable Svelte 5 runes
	compilerOptions: {
		runes: true
	},
	kit: {
		// Using adapter-static for Amplify Hosting
		adapter: adapter({
			// Use fallback for SPA-style routing
			fallback: 'index.html'
		})
	}
};

export default config;
