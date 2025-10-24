<!DOCTYPE html><html
	><head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.tailwindcss.com"></script>
		<script>
			window.FontAwesomeConfig = { autoReplaceSvg: 'nest' };
		</script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		></script>
		<link
			href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap"
			rel="stylesheet"
		/>
		<style>
			::-webkit-scrollbar {
				display: none;
			}
			body {
				font-family: 'Inter', sans-serif;
			}
		</style>
		<script>
			tailwind.config = {
				theme: {
					extend: {
						colors: {
							'eco-green': '#22c55e',
							'eco-dark': '#166534',
							'eco-light': '#dcfce7'
						}
					}
				}
			};
		</script>
	</head>
	<body class="bg-gray-50">
		<header id="header" class="border-b border-gray-200 bg-white shadow-sm">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="flex h-16 items-center justify-between">
					<div id="logo-section" class="flex items-center">
						<div class="flex items-center space-x-2">
							<div class="bg-eco-green flex h-10 w-10 items-center justify-center rounded-lg">
								<i class="fa-solid fa-recycle text-xl text-white"></i>
							</div>
							<span class="text-eco-dark text-2xl font-bold">SMW</span>
						</div>
					</div>

					<div id="nav-actions" class="flex items-center space-x-4">
						<button
							class="bg-eco-green hover:bg-eco-dark rounded-lg px-6 py-2 font-medium text-white transition-colors"
						>
							<i class="fa-solid fa-plus mr-2"></i>Add Listing
						</button>
						<button class="hover:text-eco-green px-4 py-2 font-medium text-gray-600">Sign In</button
						>
						<button
							class="bg-eco-light text-eco-dark hover:bg-eco-green rounded-lg px-6 py-2 font-medium transition-colors hover:text-white"
							>Sign Up</button
						>
					</div>
				</div>
			</div>
		</header>

		<main id="main-content">
			<section
				id="hero-section"
				class="from-eco-light flex h-[700px] items-center bg-gradient-to-br to-white"
			>
				<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="mx-auto max-w-4xl pt-16 text-center">
						<h1 class="mb-6 text-5xl leading-tight font-bold text-gray-900">
							Find Sustainable Services
							<span class="text-eco-green">Near You</span>
						</h1>
						<p class="mx-auto mb-12 max-w-2xl text-xl text-gray-600">
							Connect with local repair shops, bulk stores, recycling centers, and composting sites
							to reduce waste and live sustainably.
						</p>

						<div id="search-container" class="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
							<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
								<div id="activity-filter" class="md:col-span-2">
									<label class="mb-3 block text-sm font-medium text-gray-700"
										>Search by Activities</label
									>
									<div class="grid grid-cols-2 gap-3">
										<button
											class="border-eco-green bg-eco-light hover:bg-eco-green group flex items-center space-x-3 rounded-lg border-2 p-4 transition-colors hover:text-white"
										>
											<i
												class="fa-solid fa-screwdriver-wrench text-eco-green text-lg group-hover:text-white"
											></i>
											<span class="font-medium">Repair Shop</span>
										</button>
										<button
											class="hover:border-eco-green hover:bg-eco-light flex items-center space-x-3 rounded-lg border-2 border-gray-200 p-4 transition-colors"
										>
											<i class="fa-solid fa-shopping-basket text-lg text-gray-500"></i>
											<span class="font-medium">Grocery &amp; Bulk</span>
										</button>
										<button
											class="hover:border-eco-green hover:bg-eco-light flex items-center space-x-3 rounded-lg border-2 border-gray-200 p-4 transition-colors"
										>
											<i class="fa-solid fa-recycle text-lg text-gray-500"></i>
											<span class="font-medium">Recycling Center</span>
										</button>
										<button
											class="hover:border-eco-green hover:bg-eco-light flex items-center space-x-3 rounded-lg border-2 border-gray-200 p-4 transition-colors"
										>
											<i class="fa-solid fa-seedling text-lg text-gray-500"></i>
											<span class="font-medium">Composting Site</span>
										</button>
									</div>
								</div>

								<div id="distance-filter">
									<label class="mb-3 block text-sm font-medium text-gray-700">Distance</label>
									<div class="space-y-3">
										<button
											class="border-eco-green bg-eco-light text-eco-dark flex w-full items-center justify-between rounded-lg border-2 p-3 font-medium"
										>
											<span>Within 5km</span>
											<i class="fa-solid fa-check text-eco-green"></i>
										</button>
										<button
											class="hover:border-eco-green flex w-full items-center justify-between rounded-lg border-2 border-gray-200 p-3 transition-colors"
										>
											<span>Within 10km</span>
										</button>
										<button
											class="hover:border-eco-green flex w-full items-center justify-between rounded-lg border-2 border-gray-200 p-3 transition-colors"
										>
											<i class="fa-solid fa-location-dot mr-2"></i>
											<span>Near me</span>
										</button>
									</div>
								</div>
							</div>

							<div id="manual-location" class="mt-6">
								<input
									type="text"
									placeholder="Enter address or postcode..."
									class="focus:ring-eco-green w-full rounded-lg border border-gray-300 p-4 focus:border-transparent focus:ring-2 focus:outline-none"
								/>
							</div>

							<button
								id="search-btn"
								class="bg-eco-green hover:bg-eco-dark mt-6 w-full rounded-lg py-4 text-lg font-semibold text-white transition-colors"
							>
								<i class="fa-solid fa-search mr-2"></i>Find Services
							</button>
						</div>
					</div>
				</div>
			</section>

			<section id="value-proposition" class="bg-white py-20">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="mx-auto max-w-3xl text-center">
						<h2 class="mb-6 text-3xl font-bold text-gray-900">
							Building a Circular Economy Together
						</h2>
						<p class="text-lg leading-relaxed text-gray-600">
							SMW connects you with local businesses and services that help reduce waste, repair
							instead of replace, and support sustainable living practices across Malaysia. Join
							thousands of Malaysians making a positive environmental impact.
						</p>
					</div>
				</div>
			</section>

			<section id="category-grid" class="bg-gray-50 py-20">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 class="mb-12 text-center text-3xl font-bold text-gray-900">Explore Categories</h2>
					<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div
							id="repair-category"
							class="group cursor-pointer rounded-2xl bg-white p-8 text-center transition-shadow hover:shadow-lg"
						>
							<div
								class="bg-eco-light group-hover:bg-eco-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors"
							>
								<i
									class="fa-solid fa-screwdriver-wrench text-eco-green text-2xl group-hover:text-white"
								></i>
							</div>
							<h3 class="mb-3 text-xl font-semibold text-gray-900">Repair Services</h3>
							<p class="text-gray-600">Fix electronics, appliances, clothing, and more</p>
						</div>

						<div
							id="grocery-category"
							class="group cursor-pointer rounded-2xl bg-white p-8 text-center transition-shadow hover:shadow-lg"
						>
							<div
								class="bg-eco-light group-hover:bg-eco-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors"
							>
								<i
									class="fa-solid fa-shopping-basket text-eco-green text-2xl group-hover:text-white"
								></i>
							</div>
							<h3 class="mb-3 text-xl font-semibold text-gray-900">Bulk &amp; Refill</h3>
							<p class="text-gray-600">Zero-waste grocery stores and bulk buying options</p>
						</div>

						<div
							id="recycling-category"
							class="group cursor-pointer rounded-2xl bg-white p-8 text-center transition-shadow hover:shadow-lg"
						>
							<div
								class="bg-eco-light group-hover:bg-eco-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors"
							>
								<i class="fa-solid fa-recycle text-eco-green text-2xl group-hover:text-white"></i>
							</div>
							<h3 class="mb-3 text-xl font-semibold text-gray-900">Recycling Centers</h3>
							<p class="text-gray-600">Proper disposal for electronics, plastics, and more</p>
						</div>

						<div
							id="composting-category"
							class="group cursor-pointer rounded-2xl bg-white p-8 text-center transition-shadow hover:shadow-lg"
						>
							<div
								class="bg-eco-light group-hover:bg-eco-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors"
							>
								<i class="fa-solid fa-seedling text-eco-green text-2xl group-hover:text-white"></i>
							</div>
							<h3 class="mb-3 text-xl font-semibold text-gray-900">Composting Sites</h3>
							<p class="text-gray-600">Turn organic waste into nutrient-rich soil</p>
						</div>
					</div>
				</div>
			</section>

			<section id="education-cta" class="bg-eco-green py-20">
				<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
					<h2 class="mb-6 text-3xl font-bold text-white">Learn How to Recycle Properly</h2>
					<p class="mx-auto mb-8 max-w-2xl text-xl text-green-100">
						Get expert guidance on recycling different materials and reducing your environmental
						footprint.
					</p>
					<button
						class="text-eco-green rounded-lg bg-white px-8 py-4 text-lg font-semibold transition-colors hover:bg-gray-100"
					>
						<i class="fa-solid fa-book mr-2"></i>Recycling Guide
					</button>
				</div>
			</section>
		</main>

		<footer id="footer" class="bg-gray-900 py-12 text-white">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="flex flex-col items-center justify-between md:flex-row">
					<div id="footer-logo" class="mb-6 flex items-center space-x-2 md:mb-0">
						<div class="bg-eco-green flex h-8 w-8 items-center justify-center rounded-lg">
							<i class="fa-solid fa-recycle text-white"></i>
						</div>
						<span class="text-xl font-bold">SMW</span>
					</div>

					<div id="footer-links" class="flex space-x-8">
						<span class="cursor-pointer text-gray-300 transition-colors hover:text-white"
							>About</span
						>
						<span class="cursor-pointer text-gray-300 transition-colors hover:text-white"
							>Contact</span
						>
						<span class="cursor-pointer text-gray-300 transition-colors hover:text-white"
							>Terms of Service</span
						>
						<span class="cursor-pointer text-gray-300 transition-colors hover:text-white"
							>Privacy Policy</span
						>
					</div>
				</div>

				<div class="mt-8 border-t border-gray-800 pt-8 text-center">
					<p class="text-gray-400">
						© 2024 SMW. All rights reserved. Building a sustainable future together.
					</p>
				</div>
			</div>
		</footer>

		<script>
			document.querySelectorAll('#activity-filter button').forEach((button) => {
				button.addEventListener('click', function () {
					document.querySelectorAll('#activity-filter button').forEach((btn) => {
						btn.classList.remove('border-eco-green', 'bg-eco-light', 'text-eco-dark');
						btn.classList.add('border-gray-200');
						btn.querySelector('i').classList.remove('text-eco-green');
						btn.querySelector('i').classList.add('text-gray-500');
					});

					this.classList.remove('border-gray-200');
					this.classList.add('border-eco-green', 'bg-eco-light', 'text-eco-dark');
					this.querySelector('i').classList.remove('text-gray-500');
					this.querySelector('i').classList.add('text-eco-green');
				});
			});

			document.querySelectorAll('#distance-filter button').forEach((button) => {
				button.addEventListener('click', function () {
					document.querySelectorAll('#distance-filter button').forEach((btn) => {
						btn.classList.remove('border-eco-green', 'bg-eco-light', 'text-eco-dark');
						btn.classList.add('border-gray-200');
						const checkIcon = btn.querySelector('.fa-check');
						if (checkIcon) checkIcon.remove();
					});

					this.classList.remove('border-gray-200');
					this.classList.add('border-eco-green', 'bg-eco-light', 'text-eco-dark');
					if (!this.querySelector('.fa-check')) {
						this.innerHTML += '<i class="fa-solid fa-check text-eco-green"></i>';
					}
				});
			});
		</script>
	</body></html
>
