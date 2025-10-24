<script lang="ts">
	import Button from '$lib/ui/primitives/Button.svelte';
	import HeroSection from '$lib/ui/patterns/HeroSection.svelte';
	import SearchPanel from '$lib/ui/patterns/SearchPanel.svelte';
	import CategoryGrid from '$lib/ui/patterns/CategoryGrid.svelte';
	import CallToAction from '$lib/ui/patterns/CallToAction.svelte';
	import Container from '$lib/ui/layout/Container.svelte';
	import Section from '$lib/ui/layout/Section.svelte';
	import SectionHeader from '$lib/ui/layout/SectionHeader.svelte';

	const activities = [
		{ label: 'Repair Shop', icon: 'fa-solid fa-screwdriver-wrench', selected: true },
		{ label: 'Grocery & Bulk', icon: 'fa-solid fa-shopping-basket' },
		{ label: 'Recycling Center', icon: 'fa-solid fa-recycle' },
		{ label: 'Composting Site', icon: 'fa-solid fa-seedling' }
	];

	const distances = [
		{ label: 'Within 5km', selected: true },
		{ label: 'Within 10km' },
		{ label: 'Near me', icon: 'fa-solid fa-location-dot' }
	];

	const categories = [
		{
			label: 'Repair Services',
			description: 'Fix electronics, appliances, clothing, and more',
			icon: 'fa-solid fa-screwdriver-wrench'
		},
		{
			label: 'Bulk & Refill',
			description: 'Zero-waste grocery stores and bulk buying options',
			icon: 'fa-solid fa-shopping-basket'
		},
		{
			label: 'Recycling Centers',
			description: 'Proper disposal for electronics, plastics, and more',
			icon: 'fa-solid fa-recycle'
		},
		{
			label: 'Composting Sites',
			description: 'Turn organic waste into nutrient-rich soil',
			icon: 'fa-solid fa-seedling'
		}
	];

	const searchState = $state({ manualLocation: '' });
</script>

<HeroSection
	background="gradient"
	title="Find Sustainable Services"
	highlight="Near You"
	description="Connect with local repair shops, bulk stores, recycling centers, and composting sites to reduce waste and live sustainably."
	align="center"
>
	{#snippet children()}
		<SearchPanel>
			{#snippet children()}
				<div class="grid gap-6 md:grid-cols-3">
					<div class="space-y-4 md:col-span-2">
						<div class="grid gap-3 sm:grid-cols-2">
							{#each activities as activity}
								<Button
									variant={activity.selected ? 'secondary' : 'ghost'}
									size="md"
									class={`justify-start gap-3 border ${
										activity.selected
											? 'border-brand-primary bg-brand-primary-light/60 text-brand-primary'
											: 'border-neutral-200 text-neutral-600 hover:border-brand-primary hover:bg-brand-primary-light/40'
									}`}
								>
									<i
										class={`${activity.icon} text-lg ${activity.selected ? 'text-brand-primary' : 'text-neutral-500'}`}
									></i>
									{activity.label}
								</Button>
							{/each}
						</div>
					</div>
					<div class="space-y-3">
						<h3 class="text-sm font-semibold text-neutral-700">Distance</h3>
						{#each distances as distance}
							<Button
								variant={distance.selected ? 'secondary' : 'ghost'}
								size="md"
								fullWidth
								class={`justify-between border ${
									distance.selected
										? 'border-brand-primary bg-brand-primary-light/60 text-brand-primary'
										: 'border-neutral-200 text-neutral-700 hover:border-brand-primary hover:bg-brand-primary-light/40'
								}`}
							>
								<span>{distance.label}</span>
								{#if distance.icon}
									<i class={`${distance.icon} text-sm`}></i>
								{/if}
							</Button>
						{/each}
					</div>
				</div>

				<div class="mt-6">
					<input
						type="text"
						placeholder="Enter address or postcode..."
						class="w-full rounded-lg border border-neutral-300 p-4 text-neutral-700 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
						bind:value={searchState.manualLocation}
					/>
				</div>

				<Button class="mt-8 w-full gap-2 text-lg" size="lg">
					<i class="fa-solid fa-search"></i>
					Find Services
				</Button>
			{/snippet}
		</SearchPanel>
	{/snippet}
</HeroSection>

<Section background="default" padding="lg">
	<Container size="sm">
		<SectionHeader
			align="center"
			title="Building a Circular Economy Together"
			description="SMW connects you with local businesses and services that help reduce waste, repair instead of replace, and support sustainable living practices across Malaysia."
		/>
	</Container>
</Section>

<CategoryGrid {categories} />

<CallToAction
	title="Learn How to Recycle Properly"
	description="Get expert guidance on recycling different materials and reducing your environmental footprint."
	buttonLabel="Recycling Guide"
/>
