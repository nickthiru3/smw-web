<script lang="ts">
	import Container from '$lib/ui/layout/Container.svelte';
	import Section from '$lib/ui/layout/Section.svelte';

	interface HeroSectionProps {
		eyebrow?: string;
		title: string;
		highlight?: string;
		description?: string;
		align?: 'left' | 'center';
		background?: 'default' | 'muted' | 'brand' | 'gradient';
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		eyebrow,
		title,
		highlight,
		description,
		align = 'center',
		background = 'gradient',
		class: className = '',
		children
	}: HeroSectionProps = $props();

	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center'
	} satisfies Record<'left' | 'center', string>;

	const wrapperClass = $derived(
		['mx-auto flex max-w-4xl flex-col items-center gap-6', alignmentClasses[align], className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<Section background={background} padding="lg">
	<Container size="lg">
		<div class={wrapperClass}>
			{#if eyebrow}
				<span class="text-sm font-semibold uppercase tracking-wide text-brand-primary">{eyebrow}</span>
			{/if}

			<h1 class="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
				{title}
				{#if highlight}
					<span class="text-brand-primary"> {highlight}</span>
				{/if}
			</h1>

			{#if description}
				<p class="max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">{description}</p>
			{/if}

			{#if children}
				<div class="w-full">{@render children()}</div>
			{/if}
		</div>
	</Container>
</Section>
