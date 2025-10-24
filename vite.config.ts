import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
	server: {
		// https: true,
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	},
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['./tests/**/*.svelte.{test,spec}.{js,ts}', './tests/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: [
						'./vitest-setup-client.js',
						'./tests/register-matchers.js',
						'./tests/clean-up-dom.js'
					],
					// reporters: ['verbose'],
					restoreMocks: true
				}
			}
			// {
			// 	extends: './vite.config.ts',
			// 	test: {
			// 		name: 'server',
			// 		environment: 'node',
			// 		include: ['src/**/*.{test,spec}.{js,ts}'],
			// 		exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
			// 	}
			// }
		]
	}
});
