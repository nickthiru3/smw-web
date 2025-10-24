<!-- This file intentionally left empty; listings page now composes directly in src/routes/listings/+page.svelte -->

<script lang="ts">
	import Button from '$lib/ui/primitives/Button.svelte';
	import Card from '$lib/ui/primitives/Card.svelte';
	import Badge from '$lib/ui/primitives/Badge.svelte';

	type SortKey = 'distance' | 'rating' | 'name';

	interface SortOption {
		value: SortKey;
		label: string;
	}

	interface Listing {
		id: string;
		name: string;
		distance: string;
		categories: string[];
		description: string;
		reviews: number;
		rating?: number;
	}

	interface MapPin {
		id: string;
		top: string;
		left: string;
		listingId: string;
	}

	const ui = $state({
		selectedSort: 'distance' as SortKey,
		activeListingId: 'techfix-solutions',
		filterDrawerOpen: false
	});

	const sortOptions: SortOption[] = [
		{ value: 'distance', label: 'Distance' },
		{ value: 'rating', label: 'Rating' },
		{ value: 'name', label: 'Name' }
	];

	const listings: Listing[] = [
		{
			id: 'techfix-solutions',
			name: 'TechFix Solutions',
			distance: '0.8km',
			categories: ['Electronics', 'Mobile Phones'],
			description: 'Expert smartphone and laptop repairs with quick turnaround times.',
			reviews: 42,
			rating: 4.2
		},
		{
			id: 'fix-and-go-appliances',
			name: 'Fix & Go Appliances',
			distance: '1.2km',
			categories: ['Appliances', 'Home'],
			description: 'Trusted technicians for household appliance maintenance and repairs.',
			reviews: 28,
			rating: 4.9
		},
		{
			id: 'stitch-and-mend',
			name: 'Stitch & Mend Tailor',
			distance: '1.5km',
			categories: ['Clothing', 'Alterations'],
			description: 'Tailoring and garment repair services for everyday wear and formal outfits.',
			reviews: 0
		},
		{
			id: 'quick-electronics',
			name: 'Quick Electronics Repair',
			distance: '2.1km',
			categories: ['Electronics', 'Laptops'],
			description: 'Fast diagnostics and repairs for laptops, gaming consoles, and tablets.',
			reviews: 15,
			rating: 3.8
		}
	];

	const mapSummary = {
		title: 'Repair Shops',
		details: 'Within 5km • 24 results found'
	};

	const mapPins: MapPin[] = [
		{ id: 'pin-1', top: '22%', left: '26%', listingId: 'techfix-solutions' },
		{ id: 'pin-2', top: '38%', left: '44%', listingId: 'fix-and-go-appliances' },
		{ id: 'pin-3', top: '58%', left: '34%', listingId: 'stitch-and-mend' },
		{ id: 'pin-4', top: '30%', left: '72%', listingId: 'quick-electronics' }
	];

	const selectedListing = $derived(
		listings.find((listing) => listing.id === ui.activeListingId) ?? listings[0]
	);

	function selectSort(option: SortKey) {
		ui.selectedSort = option;
	}

	function highlightListing(id: string) {
		ui.activeListingId = id;
	}

	function reviewLabel(listing: Listing) {
		if (!listing.rating || listing.reviews === 0) {
			return 'No reviews yet';
		}

		return `(${listing.reviews} reviews)`;
	}

	function openFilters() {
		ui.filterDrawerOpen = true;
	}

	function closeFilters() {
		ui.filterDrawerOpen = false;
	}
</script>

<div class="bg-neutral-50 min-h-screen">
	<header class="bg-neutral-white/90 border-b border-neutral-200 shadow-sm backdrop-blur">
		<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
			<div class="flex items-center gap-3">
				<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-neutral-white">
					<i class="fa-solid fa-recycle"></i>
				</div>
				<span class="text-2xl font-semibold text-neutral-900">SMW</span>
			</div>
			<nav class="flex items-center gap-3">
				<Button variant="primary" size="md" class="gap-2">
					<i class="fa-solid fa-plus"></i>
					Add Listing
				</Button>
				<Button variant="ghost" size="md" class="text-neutral-600">Sign In</Button>
				<Button variant="secondary" size="md" class="text-brand-primary">Sign Up</Button>
			</nav>
		</div>
	</header>

	<main class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
		<section class="lg:w-1/3">
			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<div class="flex items-start justify-between gap-4">
						<div>
							<h2 class="text-lg font-semibold text-neutral-900">Results ({listings.length})</h2>
							<p class="text-sm text-neutral-500">Sustainable services near Kuala Lumpur</p>
						</div>
						<Button variant="ghost" size="sm" class="text-brand-primary" onclick={openFilters}>
							<i class="fa-solid fa-filter mr-2"></i>
							Filters
						</Button>
					</div>
				{/snippet}
				{#snippet children()}
					<div class="flex flex-wrap gap-2">
						{#each sortOptions as option}
							<Button
								variant={ui.selectedSort === option.value ? 'primary' : 'ghost'}
								size="sm"
								class={ui.selectedSort === option.value ? 'text-neutral-white' : 'text-neutral-600'}
								onclick={() => selectSort(option.value)}
								aria-pressed={ui.selectedSort === option.value}
							>
								{option.label}
							</Button>
						{/each}
					</div>

					<div class="mt-6 space-y-4">
						{#each listings as listing}
							<Card
								variant="outlined"
								padding="md"
								class={`cursor-pointer transition hover:shadow-md ${
									listing.id === ui.activeListingId ? 'border-brand-primary bg-brand-primary-light/40' : ''
								}`}
								onclick={() => highlightListing(listing.id)}
							>
								{#snippet children()}
									<div class="flex items-start justify-between gap-4">
										<div class="space-y-3">
											<div class="flex flex-wrap items-center gap-3">
												<h3 class="text-base font-semibold text-neutral-900">{listing.name}</h3>
												<span class="text-sm text-neutral-500">{listing.distance}</span>
											</div>
											<div class="flex flex-wrap gap-2">
												{#each listing.categories as category, index}
													<Badge tone={index === 0 ? 'brand' : 'gray'} pill size="sm">{category}</Badge>
												{/each}
											</div>
											<p class="text-sm text-neutral-600">{listing.description}</p>
										</div>
										<div class="text-right">
											{#if listing.rating}
												<div class="flex items-center justify-end gap-1 text-brand-primary">
													<i class="fa-solid fa-star text-sm"></i>
													<span class="text-sm font-semibold">{listing.rating.toFixed(1)}</span>
												</div>
											{:else}
												<span class="text-sm text-neutral-500">No rating yet</span>
											{/if}
											<span class="text-xs text-neutral-500">{reviewLabel(listing)}</span>
										</div>
									</div>
									<Button class="mt-4 w-full" variant="secondary" size="sm">
										View Details
									</Button>
								{/snippet}
							</Card>
						{/each}
					</div>
				{/snippet}
			</Card>
		</section>

		<section class="flex-1 space-y-6">
			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h1 class="text-xl font-semibold text-neutral-900">{mapSummary.title}</h1>
							<p class="text-sm text-neutral-500">{mapSummary.details}</p>
						</div>
						<div class="flex items-center gap-2">
							<Button variant="ghost" size="sm" class="text-neutral-600">
								<i class="fa-solid fa-crosshairs mr-2"></i>
								Recenter
							</Button>
							<Button variant="primary" size="sm">
								<i class="fa-solid fa-location-dot mr-2"></i>
								My Location
							</Button>
						</div>
					</div>
				{/snippet}
				{#snippet children()}
					<div class="relative h-[420px] overflow-hidden rounded-2xl bg-neutral-100">
						<div class="absolute inset-0 flex items-center justify-center">
							<Card class="max-w-sm bg-neutral-white text-center" padding="lg">
								{#snippet children()}
									<div class="flex flex-col items-center gap-4">
										<div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary-light text-brand-primary">
											<i class="fa-solid fa-map-location-dot text-xl"></i>
										</div>
										<h3 class="text-lg font-semibold text-neutral-900">Interactive Map View</h3>
										<p class="text-sm text-neutral-600">
											Select a pin to preview listing details and open the action panel.
										</p>
									</div>
								{/snippet}
							</Card>
						</div>
						{#each mapPins as pin}
							<button
								type="button"
								class="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-primary text-neutral-white shadow-lg transition hover:scale-105"
								style={`top: ${pin.top}; left: ${pin.left};`}
								onclick={() => highlightListing(pin.listingId)}
								aria-label={`Highlight ${
									listings.find((listing) => listing.id === pin.listingId)?.name ?? 'listing'
								}`}
							>
								<i class="fa-solid fa-screwdriver-wrench text-sm"></i>
							</button>
						{/each}
					</div>
				{/snippet}
			</Card>

			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<div class="flex items-start justify-between gap-4">
						<div>
							<h3 class="text-lg font-semibold text-neutral-900">{selectedListing.name}</h3>
							<p class="text-sm text-neutral-500">{selectedListing.distance} away</p>
						</div>
						<Button variant="ghost" size="sm" class="text-neutral-600">
							<i class="fa-solid fa-share mr-2"></i>
							Share
						</Button>
					</div>
				{/snippet}
				{#snippet children()}
					<div class="space-y-4">
						<div class="flex flex-wrap gap-2">
							{#each selectedListing.categories as category, index}
								<Badge tone={index === 0 ? 'brand' : 'gray'} pill size="sm">{category}</Badge>
							{/each}
						</div>
						<div class="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
							<div class="flex items-center gap-2">
								<i class="fa-solid fa-star text-brand-primary"></i>
								{#if selectedListing.rating}
									<span class="font-semibold text-neutral-900">{selectedListing.rating.toFixed(1)}</span>
								{:else}
									<span>No rating yet</span>
								{/if}
							</div>
							<span class="text-xs text-neutral-500">{reviewLabel(selectedListing)}</span>
						</div>
						<p class="text-sm text-neutral-600">{selectedListing.description}</p>
						<div class="flex flex-col gap-3 sm:flex-row">
							<Button variant="primary" size="sm" class="flex-1">
								<i class="fa-solid fa-phone mr-2"></i>
								Contact
							</Button>
							<Button variant="secondary" size="sm" class="flex-1">
								<i class="fa-solid fa-directions mr-2"></i>
								Directions
							</Button>
						</div>
					</div>
				{/snippet}
			</Card>
		</section>
	</main>
</div>
