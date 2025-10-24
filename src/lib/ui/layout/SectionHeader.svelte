<script lang="ts">
	interface SectionHeaderProps {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
		class?: string;
	}

	let {
		eyebrow,
		title,
		description,
		align = 'center',
		class: className = ''
	}: SectionHeaderProps = $props();

	const alignmentClasses = {
		left: 'items-start text-left',
		center: 'items-center text-center'
	} satisfies Record<'left' | 'center', string>;

	const headerClass = $derived([
		'flex flex-col gap-3',
		alignmentClasses[align],
		className
	]
		.filter(Boolean)
		.join(' '));
</script>

<div class={headerClass}>
	{#if eyebrow}
		<span class="text-sm font-semibold uppercase tracking-wide text-brand-primary">{eyebrow}</span>
	{/if}
	<h2 class="text-3xl font-semibold text-neutral-900">{title}</h2>
	{#if description}
		<p class="max-w-3xl text-lg leading-relaxed text-neutral-600">{description}</p>
	{/if}
</div>
