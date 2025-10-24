<script lang="ts">
	import Card from '$lib/ui/primitives/Card.svelte';

	interface SearchPanelProps {
		title?: string;
		description?: string;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		title,
		description,
		class: className = '',
		children
	}: SearchPanelProps = $props();

	const wrapperClass = $derived(['mx-auto max-w-3xl w-full', className].filter(Boolean).join(' '));
</script>

<div class={wrapperClass}>
	{#if title || description}
		<div class="mb-8 text-center">
			{#if title}
				<h2 class="text-xl font-semibold text-neutral-900">{title}</h2>
			{/if}
			{#if description}
				<p class="mt-2 text-neutral-600">{description}</p>
			{/if}
		</div>
	{/if}

	<Card class="rounded-2xl border-none bg-neutral-white shadow-lg" padding="lg" hasDivider>
		{#if children}
			{@render children()}
		{/if}
	</Card>
</div>
