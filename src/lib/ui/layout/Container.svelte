<script lang="ts">
	interface ContainerProps {
		size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
		padding?: 'none' | 'sm' | 'lg';
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { size = 'lg', padding = 'lg', class: className = '', children }: ContainerProps = $props();

	const maxWidthClasses = {
		sm: 'max-w-3xl',
		md: 'max-w-5xl',
		lg: 'max-w-7xl',
		xl: 'max-w-8xl',
		full: 'max-w-none'
	} satisfies Record<NonNullable<ContainerProps['size']>, string>;

	const paddingClasses = {
		none: 'px-0',
		sm: 'px-4 sm:px-6',
		lg: 'px-4 sm:px-6 lg:px-8'
	} satisfies Record<NonNullable<ContainerProps['padding']>, string>;

	const containerClass = $derived(
		['mx-auto w-full', maxWidthClasses[size], paddingClasses[padding], className]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if children}
	<div class={containerClass}>
		{@render children()}
	</div>
{:else}
	<div class={containerClass}></div>
{/if}
