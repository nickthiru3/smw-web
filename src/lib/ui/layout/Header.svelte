<script lang="ts">
	import type { Snippet } from 'svelte';

	interface HeaderProps {
		class?: string;
		brand?: Snippet;
		actions?: Snippet;
	}

	let { class: className = '', brand, actions }: HeaderProps = $props();

	const headerClass = $derived(
		['bg-neutral-white/90 border-b border-neutral-200 shadow-sm backdrop-blur', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<header class={headerClass}>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		{#if brand}
			<div class="flex items-center gap-3 text-neutral-900">
				{@render brand()}
			</div>
		{/if}
		{#if actions}
			<nav class="flex flex-wrap items-center gap-3">
				{@render actions()}
			</nav>
		{/if}
	</div>
</header>
