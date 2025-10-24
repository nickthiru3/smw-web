<script lang="ts">
	import Container from '$lib/ui/layout/Container.svelte';
	import Section from '$lib/ui/layout/Section.svelte';
	import SectionHeader from '$lib/ui/layout/SectionHeader.svelte';
	import Card from '$lib/ui/primitives/Card.svelte';

	type Category = {
		label: string;
		description: string;
		icon: string;
	};

	interface CategoryGridProps {
		title?: string;
		categories: Category[];
		background?: 'default' | 'muted';
		class?: string;
	}

	let {
		title = 'Explore Categories',
		categories,
		background = 'muted',
		class: className = ''
	}: CategoryGridProps = $props();

	const gridClass = $derived(['mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4', className].filter(Boolean).join(' '));
</script>

<Section background={background} padding="lg">
	<Container size="lg">
		{#if title}
			<SectionHeader align="center" title={title} />
		{/if}
		<div class={gridClass}>
			{#each categories as category}
				<Card class="rounded-2xl bg-neutral-white p-0 text-center transition-shadow hover:shadow-lg" padding="lg">
					{#snippet children()}
						<div class="space-y-4">
							<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary-light text-brand-primary">
								<i class={`${category.icon} text-2xl`}></i>
							</div>
							<h3 class="text-xl font-semibold text-neutral-900">{category.label}</h3>
							<p class="text-neutral-600">{category.description}</p>
						</div>
					{/snippet}
				</Card>
			{/each}
		</div>
	</Container>
</Section>
