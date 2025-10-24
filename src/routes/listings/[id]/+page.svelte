<script lang="ts">
	import Badge from '$lib/ui/primitives/Badge.svelte';
	import Button from '$lib/ui/primitives/Button.svelte';
	import Card from '$lib/ui/primitives/Card.svelte';

	type OperatingHour = {
		day: string;
		time: string;
		status?: 'open' | 'closed';
	};

	type Review = {
		id: string;
		name: string;
		rating: number;
		timeAgo: string;
		comment: string;
	};

	type SimilarListing = {
		id: string;
		name: string;
		distance: string;
		rating: number;
	};

	const listing = {
		id: 'eco-fix-electronics',
		name: 'EcoFix Electronics Repair',
		categories: ['Electronics Repair', 'Smartphones', 'Laptops'],
		description:
			'Trusted specialists providing diagnostics, repairs, and maintenance for smartphones, laptops, and tablets with sustainable, repair-first practices.',
		distance: '2.3 km away',
		rating: 4.8,
		reviewCount: 127,
		heroImage:
			'https://storage.googleapis.com/uxpilot-auth.appspot.com/753ca90a98-d2ccae120b1c73533dd7.png',
		reviewLabel: 'Based on 127 reviews',
		openStatus: 'Open now - Closes at 7:00 PM',
		phone: '+60 3-2234 5678',
		website: 'https://ecofix.com.my',
		address: ['123 Jalan Bukit Bintang', '55100 Kuala Lumpur'],
		services: [
			'Water-damaged phone restoration',
			'Laptop hardware diagnostics',
			'Battery and screen replacements',
			'Gaming console repairs',
			'Data recovery and backup services'
		],
		hours: [
			{ day: 'Monday - Friday', time: '9:00 AM - 7:00 PM', status: 'open' },
			{ day: 'Saturday', time: '10:00 AM - 5:00 PM', status: 'open' },
			{ day: 'Sunday', time: 'Closed', status: 'closed' }
		] satisfies OperatingHour[]
	};

	const reviews: Review[] = [
		{
			id: 'ahmad-rahman',
			name: 'Ahmad Rahman',
			rating: 5,
			timeAgo: '2 days ago',
			comment:
				'Fixed my iPhone screen perfectly. Quick turnaround and transparent pricing. Highly recommend EcoFix for device repairs.'
		},
		{
			id: 'sarah-lim',
			name: 'Sarah Lim',
			rating: 4,
			timeAgo: '1 week ago',
			comment:
				'Professional staff and organised workspace. They recovered data from my damaged laptop—very grateful for the service.'
		}
	];

	const quickActions = [
		{ id: 'check-in', label: 'Check In', icon: 'fa-solid fa-check', variant: 'primary' as const },
		{
			id: 'save',
			label: 'Save to Favourites',
			icon: 'fa-regular fa-heart',
			variant: 'secondary' as const
		},
		{
			id: 'share',
			label: 'Share Business',
			icon: 'fa-solid fa-share-nodes',
			variant: 'secondary' as const
		}
	];

	const similarListings: SimilarListing[] = [
		{ id: 'techfix-solutions', name: 'TechFix Solutions', distance: '3.2 km away', rating: 4.5 },
		{ id: 'digital-repair-hub', name: 'Digital Repair Hub', distance: '4.1 km away', rating: 4.2 }
	];

	function ratingStars(value: number) {
		return Array.from({ length: 5 }, (_, index) => index < Math.round(value));
	}

	function websiteLabel(url: string) {
		return url.replace(/^https?:\/\//, '');
	}
</script>

<main class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
	<div class="grid gap-8 lg:grid-cols-[2fr_1fr]">
		<section class="space-y-6">
			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div class="space-y-3">
							<div class="flex flex-wrap items-center gap-3">
								<h1 class="text-2xl font-bold">{listing.name}</h1>
								<span class="text-sm text-neutral-500">{listing.distance}</span>
							</div>
							<div class="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
								<div class="flex items-center gap-1 text-brand-primary">
									<i class="fa-solid fa-star text-base" aria-hidden="true"></i>
									<span class="font-semibold text-neutral-900">{listing.rating.toFixed(1)}</span>
								</div>
								<span>{listing.reviewLabel}</span>
							</div>
						</div>
						<Button variant="ghost" size="sm" class="text-brand-primary">
							<i class="fa-solid fa-arrow-left mr-2" aria-hidden="true"></i>
							Back to Listings
						</Button>
					</div>
				{/snippet}
				{#snippet children()}
					<img
						src={listing.heroImage}
						alt={`Photo of ${listing.name}`}
						class="aspect-video w-full rounded-xl object-cover"
					/>

					<div class="mt-4 flex flex-wrap gap-2">
						{#each listing.categories as category, index}
							<Badge tone={index === 0 ? 'brand' : 'gray'} pill size="sm">{category}</Badge>
						{/each}
					</div>

					<p class="mt-6 text-sm leading-6 text-neutral-600">{listing.description}</p>

					<div class="mt-6 flex flex-wrap gap-3">
						<Button variant="primary" size="sm" class="gap-2">
							<i class="fa-solid fa-phone" aria-hidden="true"></i>
							Call Now
						</Button>
						<Button variant="secondary" size="sm" class="gap-2">
							<i class="fa-solid fa-share" aria-hidden="true"></i>
							Share
						</Button>
					</div>
				{/snippet}
			</Card>

			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<h2 class="text-xl font-semibold">Business Information</h2>
						<div
							class="bg-brand-primary-light rounded-full px-3 py-1 text-xs font-medium text-brand-primary"
						>
							{listing.openStatus}
						</div>
					</div>
				{/snippet}
				{#snippet children()}
					<div class="grid gap-6 lg:grid-cols-2">
						<div class="space-y-4">
							<h3
								class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500"
							>
								<i class="fa-solid fa-screwdriver-wrench text-brand-primary" aria-hidden="true"
								></i>
								Services
							</h3>
							<ul class="space-y-3 text-sm text-neutral-600">
								{#each listing.services as service}
									<li class="flex items-start gap-2">
										<i
											class="fa-solid fa-check pt-1 text-xs text-brand-primary"
											aria-hidden="true"
										></i>
										<span>{service}</span>
									</li>
								{/each}
							</ul>
						</div>

						<div class="space-y-4">
							<h3
								class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500"
							>
								<i class="fa-solid fa-clock text-brand-primary" aria-hidden="true"></i>
								Operating Hours
							</h3>
							<div class="space-y-3 text-sm text-neutral-600">
								{#each listing.hours as hour}
									<div
										class="flex items-center justify-between rounded-lg bg-neutral-100 px-4 py-3"
									>
										<span>{hour.day}</span>
										<span
											class={`font-medium ${hour.status === 'closed' ? 'text-red-500' : 'text-neutral-900'}`}
										>
											{hour.time}
										</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/snippet}
			</Card>

			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<h2 class="text-xl font-semibold">Reviews & Ratings</h2>
						<Button variant="ghost" size="sm" class="text-brand-primary">
							<i class="fa-solid fa-pen mr-2" aria-hidden="true"></i>
							Write a Review
						</Button>
					</div>
				{/snippet}
				{#snippet children()}
					<div class="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
						<Card class="bg-brand-primary-light/40 text-center" padding="lg">
							{#snippet children()}
								<div class="space-y-3">
									<div class="flex items-center justify-center gap-2 text-brand-primary">
										<i class="fa-solid fa-star text-xl" aria-hidden="true"></i>
										<span class="text-3xl font-semibold text-neutral-900"
											>{listing.rating.toFixed(1)}</span
										>
									</div>
									<p class="text-xs uppercase tracking-wide text-brand-primary">
										Customer rating
									</p>
									<p class="text-sm text-neutral-600">{listing.reviewLabel}</p>
								</div>
							{/snippet}
						</Card>

						<div class="space-y-6">
							{#each reviews as review}
								<Card class="bg-neutral-white" variant="outlined" padding="md">
									{#snippet children()}
										<div class="space-y-3">
											<div class="flex items-center justify-between text-sm text-neutral-500">
												<h3 class="text-base font-semibold text-neutral-900">{review.name}</h3>
												<span>{review.timeAgo}</span>
											</div>
											<div class="flex items-center gap-2 text-brand-primary">
												{#each ratingStars(review.rating) as filled}
													<i
														class={`fa-star text-sm ${filled ? 'fa-solid' : 'fa-regular'} ${filled ? '' : 'text-neutral-400'}`}
														aria-hidden="true"
													></i>
												{/each}
											</div>
											<p class="text-sm leading-6 text-neutral-600">{review.comment}</p>
										</div>
									{/snippet}
								</Card>
							{/each}
							<div class="text-sm text-neutral-500">
								Showing {reviews.length} of {listing.reviewCount} reviews
							</div>
						</div>
					</div>
				{/snippet}
			</Card>
		</section>

		<aside class="space-y-6">
			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<h2 class="text-lg font-semibold">Contact Information</h2>
				{/snippet}
				{#snippet children()}
					<div class="space-y-4 text-sm">
						<div class="flex items-center gap-3">
							<div
								class="bg-brand-primary-light flex h-10 w-10 items-center justify-center rounded-lg text-brand-primary"
							>
								<i class="fa-solid fa-phone" aria-hidden="true"></i>
							</div>
							<div>
								<p class="text-xs uppercase tracking-wide text-neutral-500">Phone</p>
								<p class="font-medium text-neutral-900">{listing.phone}</p>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<div
								class="bg-brand-primary-light flex h-10 w-10 items-center justify-center rounded-lg text-brand-primary"
							>
								<i class="fa-solid fa-globe" aria-hidden="true"></i>
							</div>
							<div>
								<p class="text-xs uppercase tracking-wide text-neutral-500">Website</p>
								<a
									href={listing.website}
									target="_blank"
									rel="noreferrer"
									class="font-medium text-brand-primary hover:underline"
								>
									{websiteLabel(listing.website)}
								</a>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<div
								class="bg-brand-primary-light flex h-10 w-10 items-center justify-center rounded-lg text-brand-primary"
							>
								<i class="fa-solid fa-location-dot" aria-hidden="true"></i>
							</div>
							<div>
								<p class="text-xs uppercase tracking-wide text-neutral-500">Address</p>
								<p class="font-medium text-neutral-900">
									{#each listing.address as line, index}
										<span>{line}</span>
										{#if index < listing.address.length - 1}
											<br />
										{/if}
									{/each}
								</p>
							</div>
						</div>
					</div>
					<Button variant="primary" size="sm" class="mt-6 w-full gap-2">
						<i class="fa-solid fa-directions" aria-hidden="true"></i>
						Get Directions
					</Button>
				{/snippet}
			</Card>

			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<h2 class="text-lg font-semibold">Quick Actions</h2>
				{/snippet}
				{#snippet children()}
					<div class="space-y-3">
						{#each quickActions as action}
							<Button
								fullWidth
								variant={action.variant === 'primary' ? 'primary' : 'secondary'}
								size="sm"
								class="justify-center gap-2"
							>
								<i class={action.icon} aria-hidden="true"></i>
								{action.label}
							</Button>
						{/each}
					</div>
				{/snippet}
			</Card>

			<Card class="bg-neutral-white" padding="lg" hasDivider>
				{#snippet header()}
					<h2 class="text-lg font-semibold">Similar Listings</h2>
				{/snippet}
				{#snippet children()}
					<div class="space-y-4">
						{#each similarListings as item}
							<Card variant="outlined" padding="md" class="bg-neutral-white">
								{#snippet children()}
									<div class="flex items-center justify-between gap-3">
										<div>
											<h3 class="text-base font-semibold">{item.name}</h3>
											<p class="text-xs text-neutral-500">{item.distance}</p>
										</div>
										<div class="flex items-center gap-1 text-brand-primary">
											<i class="fa-solid fa-star text-sm" aria-hidden="true"></i>
											<span class="text-sm font-semibold">{item.rating.toFixed(1)}</span>
										</div>
									</div>
								{/snippet}
							</Card>
						{/each}
					</div>
				{/snippet}
			</Card>
		</aside>
	</div>
</main>
