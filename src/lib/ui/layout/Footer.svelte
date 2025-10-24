<script lang="ts">
	import type { Snippet } from 'svelte';

	type FooterLinkGroup = {
		title?: string;
		links: { label: string; href: string }[];
	};

	interface FooterProps {
		groups?: FooterLinkGroup[];
		class?: string;
		brand?: Snippet;
		bottom?: Snippet;
	}

	let { groups = [], class: className = '', brand, bottom }: FooterProps = $props();

	const footerClass = $derived(
		['bg-neutral-900 py-12 text-neutral-200', className].filter(Boolean).join(' ')
	);

	const hasTitledGroups = $derived(groups.some((group) => Boolean(group.title)));
</script>

<footer class={footerClass}>
	<div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
		<div class="flex w-full flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
			{#if brand}
				<div class="flex items-center gap-3 text-neutral-white">
					{@render brand()}
				</div>
			{/if}

			{#if groups.length}
				<nav class="flex w-full flex-wrap items-center justify-center gap-6 text-sm text-neutral-300 md:ml-auto md:justify-end md:gap-8">
					{#each groups as group}
						{#if hasTitledGroups && group.title}
							<div class="min-w-[160px] space-y-2 text-left">
								{#if group.title}
									<span class="text-xs font-semibold uppercase tracking-wide text-neutral-400">
										{group.title}
									</span>
								{/if}
								{#each group.links as link}
									<a class="transition hover:text-neutral-white" href={link.href}>{link.label}</a>
								{/each}
							</div>
						{/if}

						{#if !hasTitledGroups || !group.title}
							<ul class="flex flex-wrap items-center justify-center gap-6 md:gap-8">
								{#each group.links as link}
									<li>
										<a class="transition hover:text-neutral-white" href={link.href}>{link.label}</a>
									</li>
								{/each}
							</ul>
						{/if}
					{/each}
				</nav>
			{/if}
		</div>

		{#if bottom}
			<div class="border-t border-white/10 pt-6 text-center text-sm text-neutral-400">
				{@render bottom()}
			</div>
		{/if}
	</div>
</footer>
