<script lang="ts">
    import type { Snippet } from 'svelte';

	type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'outline';
	type BadgeTone = 'brand' | 'gray';
	type BadgeSize = 'sm' | 'md';

	interface BadgeProps {
		variant?: BadgeVariant;
		tone?: BadgeTone;
		size?: BadgeSize;
		icon?: string;
		pill?: boolean;
		class?: string;
		children?: Snippet;
	}

	let {
		variant = 'default',
		tone = 'brand',
		size = 'md',
		icon,
		pill = false,
		class: className = '',
		children
	}: BadgeProps = $props();

	const toneColors: Record<BadgeTone, { base: string; soft: string; text: string }> = {
		brand: {
			base: 'var(--color-brand-primary)',
			soft: 'var(--color-brand-primary-light)',
			text: 'var(--color-brand-primary)'
		},
		gray: {
			base: 'var(--color-gray-700)',
			soft: 'var(--color-gray-100)',
			text: 'var(--color-gray-700)'
		}
	};

	const sizeClasses: Record<BadgeSize, string> = {
		sm: 'text-xs px-2 py-1 gap-1.5',
		md: 'text-sm px-2.5 py-1.5 gap-2'
	};

	function computeVariantStyles(
		current: BadgeVariant,
		colors: { base: string; soft: string; text: string }
	) {
		switch (current) {
			case 'success':
				return {
					classes: 'border border-transparent bg-emerald-100 text-emerald-700',
					style: ''
				};
			case 'warning':
				return {
					classes: 'border border-transparent bg-amber-100 text-amber-700',
					style: ''
				};
			case 'danger':
				return {
					classes: 'border border-transparent bg-red-100 text-red-700',
					style: ''
				};
			case 'outline':
				return {
					classes: 'border',
					style: `background-color: transparent; color: ${colors.text}; border-color: ${colors.base};`
				};
			default:
				return {
					classes: 'border border-transparent',
					style: `background-color: ${colors.soft}; color: ${colors.text};`
				};
		}
	}

	const baseClasses = $derived(
		[
			'inline-flex items-center font-medium uppercase tracking-wide select-none',
			pill ? 'rounded-full' : 'rounded-md',
			sizeClasses[size]
		]
			.filter(Boolean)
			.join(' ')
	);

	const colors = $derived(toneColors[tone]);
	const variantStyles = $derived(computeVariantStyles(variant, colors));
	const resolvedClasses = $derived([baseClasses, variantStyles.classes, className].filter(Boolean).join(' '));
	const iconSize = $derived(size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4');
</script>

<span class={resolvedClasses} style={variantStyles.style}>
	{#if icon}
		<i class={`${icon} ${iconSize}`} aria-hidden="true"></i>
	{/if}

    {#if children}
        {@render children()}
    {/if}
</span>
