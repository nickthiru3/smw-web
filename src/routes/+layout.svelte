<script lang="ts">
	import '../app.css';

	import Header from '$lib/ui/layout/Header.svelte';
	import Footer from '$lib/ui/layout/Footer.svelte';

	const footerGroups = [
		{
			links: [
				{ label: 'About', href: '/about' },
				{ label: 'Contact', href: '/contact' },
				{ label: 'Terms of Service', href: '/terms' },
				{ label: 'Privacy Policy', href: '/privacy' }
			]
		}
	];

	let { children } = $props<{
		children?: import('svelte').Snippet;
	}>();
</script>

<Header>
	{#snippet brand()}
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-neutral-white">
				<i class="fa-solid fa-recycle"></i>
			</div>
			<span class="text-2xl font-semibold text-neutral-900">SMW</span>
		</div>
	{/snippet}

	{#snippet actions()}
		<button class="gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-neutral-white">
			<i class="fa-solid fa-plus"></i>
			Add Listing
		</button>
		<button class="rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 hover:text-brand-primary">
			Sign In
		</button>
		<button class="gap-2 rounded-lg bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary">
			Sign Up
		</button>
	{/snippet}
</Header>

<main>
	{@render children?.()}
</main>

<Footer groups={footerGroups}>
	{#snippet brand()}
		<div class="flex items-center gap-3">
			<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-neutral-white">
				<i class="fa-solid fa-recycle"></i>
			</div>
			<span class="text-lg font-medium">SMW</span>
		</div>
	{/snippet}

	{#snippet bottom()}
		&copy; {new Date().getFullYear()} SMW. All rights reserved. Building a sustainable future together.
	{/snippet}
</Footer>
