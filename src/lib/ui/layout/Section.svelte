<script lang="ts">
	type SectionPadding = 'none' | 'sm' | 'lg';
	type SectionBackground = 'default' | 'muted' | 'brand' | 'gradient';

	interface SectionProps {
		padding?: SectionPadding;
		background?: SectionBackground;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		padding = 'lg',
		background = 'default',
		class: className = '',
		children
	}: SectionProps = $props();

	const paddingClasses: Record<SectionPadding, string> = {
		none: 'py-0',
		sm: 'py-12 lg:py-16',
		lg: 'py-20 lg:py-24'
	};

	const backgroundClasses: Record<SectionBackground, string> = {
		default: 'bg-neutral-white',
		muted: 'bg-neutral-50',
		brand: 'bg-brand-primary text-neutral-white',
		gradient: 'bg-gradient-to-br from-brand-primary-light/50 to-neutral-white'
	};

	const sectionClass = $derived(
		['relative', paddingClasses[padding], backgroundClasses[background], className]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if children}
	<section class={sectionClass}>
		{@render children()}
	</section>
{:else}
	<section class={sectionClass}></section>
{/if}
