<script lang="ts">
	import type { Snippet } from 'svelte';

	type ButtonVariant = 'primary' | 'secondary' | 'ghost';
	type ButtonSize = 'sm' | 'md' | 'lg';
	type ButtonType = 'button' | 'submit' | 'reset';

	interface ButtonProps {
		variant?: ButtonVariant;
		size?: ButtonSize;
		type?: ButtonType;
		fullWidth?: boolean;
		disabled?: boolean;
		loading?: boolean;
		ariaLabel?: string;
		'aria-pressed'?: boolean;
		class?: string;
		children?: Snippet;
		icon?: Snippet;
		onclick?: (event: MouseEvent) => void;
	}

	let {
		variant = 'primary',
		size = 'md',
		type: typeAttr = 'button',
		fullWidth = false,
		disabled = false,
		loading = false,
		ariaLabel,
		'aria-pressed': ariaPressed,
		class: className = '',
		children,
		icon,
		onclick
	}: ButtonProps = $props();

	const variantClasses: Record<ButtonVariant, string> = {
		primary:
			'bg-brand-primary text-neutral-white hover:bg-brand-primary-dark focus-visible:outline-brand-accent',
		secondary:
			'bg-neutral-white text-brand-primary border border-brand-primary hover:bg-brand-primary-light focus-visible:outline-brand-primary',
		ghost:
			'text-brand-primary hover:bg-brand-primary-light focus-visible:outline-brand-primary'
	};

	const sizeClasses: Record<ButtonSize, string> = {
		sm: 'text-sm px-3 py-2 gap-2',
		md: 'text-sm px-4 py-2.5 gap-2',
		lg: 'text-base px-5 py-3 gap-2.5'
	};

	const baseClasses = $derived(
		[
			'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none relative',
			fullWidth ? 'w-full' : ''
		]
			.filter(Boolean)
			.join(' ')
	);

	const resolvedClasses = $derived(
		[baseClasses, variantClasses[variant], sizeClasses[size], className].filter(Boolean).join(' ')
	);

	const spinnerClasses = 'absolute inline-flex h-4 w-4 animate-spin rounded-full border-2 border-neutral-white border-t-transparent';
</script>

<button
	type={typeAttr}
	class={resolvedClasses}
	disabled={disabled || loading}
	aria-label={ariaLabel}
	aria-pressed={ariaPressed}
	aria-busy={loading}
	onclick={onclick}
>
	{#if loading}
		<span class={spinnerClasses}></span>
	{/if}
	<span class={loading ? 'opacity-0' : 'inline-flex items-center gap-2'}>
		{#if icon}
			{@render icon()}
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</span>
</button>
