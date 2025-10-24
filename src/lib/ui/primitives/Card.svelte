<script lang="ts">
    import type { Snippet } from 'svelte';

    type CardVariant = 'surface' | 'elevated' | 'outlined';
    type CardPadding = 'none' | 'sm' | 'md' | 'lg';

    interface CardProps {
        variant?: CardVariant;
        padding?: CardPadding;
        hasDivider?: boolean;
        header?: Snippet;
        children?: Snippet;
        footer?: Snippet;
        class?: string;
        onclick?: (event: MouseEvent) => void;
    }

    let {
        variant = 'surface',
        padding = 'md',
        hasDivider = false,
        header,
        children,
        footer,
        class: className = '',
        onclick
    }: CardProps = $props();

    const isInteractive = $derived(Boolean(onclick));

    type VariantConfig = { classes: string; style: string };

    const variantConfigMap: Record<CardVariant, VariantConfig> = {
        surface: {
            classes: 'border border-gray-100 bg-neutral-white',
            style: 'box-shadow: var(--elevation-sm);'
        },
        elevated: {
            classes: 'border border-transparent bg-neutral-white',
            style: 'box-shadow: var(--elevation-lg);'
        },
        outlined: {
            classes: 'border border-gray-200 bg-neutral-white',
            style: 'box-shadow: var(--elevation-none);'
        }
    };

    const paddingClasses: Record<CardPadding, string> = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };

    const dividerOffsets: Record<CardPadding, string> = {
        none: '',
        sm: '-mx-4',
        md: '-mx-6',
        lg: '-mx-8'
    };

    const variantConfig = $derived(variantConfigMap[variant]);
    const rootClasses = $derived(['rounded-lg', variantConfig.classes, className].filter(Boolean).join(' '));
    const contentClass = $derived(paddingClasses[padding]);
    const dividerClass = $derived(['border-t border-gray-200', dividerOffsets[padding]].filter(Boolean).join(' '));
</script>

{#if isInteractive}
    <button
        type="button"
        class={`${rootClasses} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary`}
        style={variantConfig.style}
        onclick={onclick}
    >
        <div class={contentClass}>
            {#if header}
                <div class="mb-4 flex items-center justify-between gap-4">
                    {@render header()}
                </div>
                {#if hasDivider}
                    <div class={`${dividerClass} mb-4`} aria-hidden="true"></div>
                {/if}
            {/if}

            {#if children}
                {@render children()}
            {/if}

            {#if footer}
                {#if hasDivider}
                    <div class={`${dividerClass} mt-4`} aria-hidden="true"></div>
                {/if}
                <div class="mt-4">
                    {@render footer()}
                </div>
            {/if}
        </div>
    </button>
{:else}
    <div class={rootClasses} style={variantConfig.style}>
        <div class={contentClass}>
            {#if header}
                <div class="mb-4 flex items-center justify-between gap-4">
                    {@render header()}
                </div>
                {#if hasDivider}
                    <div class={`${dividerClass} mb-4`} aria-hidden="true"></div>
                {/if}
            {/if}

            {#if children}
                {@render children()}
            {/if}

            {#if footer}
                {#if hasDivider}
                    <div class={`${dividerClass} mt-4`} aria-hidden="true"></div>
                {/if}
                <div class="mt-4">
                    {@render footer()}
                </div>
            {/if}
        </div>
    </div>
{/if}
