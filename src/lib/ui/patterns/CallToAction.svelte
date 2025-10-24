<script lang="ts">
	import Section from '$lib/ui/layout/Section.svelte';
	import Container from '$lib/ui/layout/Container.svelte';
	import Button from '$lib/ui/primitives/Button.svelte';

	interface CallToActionProps {
		title: string;
		description?: string;
		buttonLabel: string;
		buttonIcon?: string;
		buttonVariant?: 'primary' | 'secondary';
		onClick?: (event: MouseEvent) => void;
		background?: 'brand' | 'muted' | 'default';
	}

	let {
		title,
		description,
		buttonLabel,
		buttonIcon = 'fa-solid fa-book',
		buttonVariant = 'secondary',
		onClick,
		background = 'brand'
	}: CallToActionProps = $props();
</script>

<Section background={background} padding="lg">
	<Container size="lg">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-semibold">{title}</h2>
			{#if description}
				<p class="mx-auto mt-4 max-w-2xl text-lg text-white/80">{description}</p>
			{/if}
			<Button
				variant={buttonVariant}
				size="lg"
				class={`mt-8 gap-2 ${buttonVariant === 'secondary' ? 'bg-neutral-white text-brand-primary' : ''}`}
				onclick={onClick}
			>
				{#if buttonIcon}
					<i class={buttonIcon}></i>
				{/if}
				{buttonLabel}
			</Button>
		</div>
	</Container>
</Section>
