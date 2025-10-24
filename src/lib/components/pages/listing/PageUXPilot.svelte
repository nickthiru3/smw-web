<!DOCTYPE html>
<html>
	<head>
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
			href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
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
						<button
							id="back-button"
							class="hover:text-eco-green hover:bg-eco-light mr-4 rounded-lg p-2 text-gray-600 transition-colors"
						>
							<i class="fa-solid fa-arrow-left text-xl"></i>
						</button>
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

		<main id="main-content" class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
				<div id="business-details" class="lg:col-span-2">
					<div id="business-header" class="mb-8">
						<div class="mb-4 flex items-start justify-between">
							<div>
								<h1 class="mb-3 text-3xl font-bold text-gray-900">EcoFix Electronics Repair</h1>
								<div class="mb-4 flex items-center space-x-3">
									<span
										class="bg-eco-light text-eco-dark rounded-full px-3 py-1 text-sm font-medium"
										>Electronics Repair</span
									>
									<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
										>Smartphones</span
									>
									<span
										class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
										>Laptops</span
									>
								</div>
								<div class="flex items-center space-x-4 text-sm text-gray-600">
									<div class="flex items-center">
										<i class="fa-solid fa-star mr-1 text-yellow-400"></i>
										<span class="font-medium">4.8</span>
										<span class="ml-1">(127 reviews)</span>
									</div>
									<div class="flex items-center">
										<i class="fa-solid fa-location-dot mr-1 text-gray-400"></i>
										<span>2.3 km away</span>
									</div>
								</div>
							</div>
							<div id="action-buttons" class="flex items-center space-x-3">
								<button class="rounded-lg bg-gray-100 p-3 transition-colors hover:bg-gray-200">
									<i class="fa-regular fa-heart text-gray-600"></i>
								</button>
								<button class="rounded-lg bg-gray-100 p-3 transition-colors hover:bg-gray-200">
									<i class="fa-solid fa-share text-gray-600"></i>
								</button>
							</div>
						</div>
					</div>

					<div id="hero-image" class="mb-8">
						<img
							class="h-80 w-full rounded-2xl object-cover shadow-lg"
							src="https://storage.googleapis.com/uxpilot-auth.appspot.com/753ca90a98-d2ccae120b1c73533dd7.png"
							alt="modern electronics repair shop interior with workbenches, tools, and organized components"
						/>
					</div>

					<div
						id="key-information"
						class="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
					>
						<h2 class="mb-6 text-2xl font-bold text-gray-900">Business Information</h2>

						<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div id="services-info">
								<h3 class="mb-4 flex items-center text-lg font-semibold text-gray-900">
									<i class="fa-solid fa-screwdriver-wrench text-eco-green mr-2"></i>
									Services & Products
								</h3>
								<ul class="space-y-2 text-gray-600">
									<li class="flex items-center">
										<i class="fa-solid fa-check text-eco-green mr-2 text-sm"></i>
										Smartphone screen repair
									</li>
									<li class="flex items-center">
										<i class="fa-solid fa-check text-eco-green mr-2 text-sm"></i>
										Laptop hardware diagnostics
									</li>
									<li class="flex items-center">
										<i class="fa-solid fa-check text-eco-green mr-2 text-sm"></i>
										Tablet battery replacement
									</li>
									<li class="flex items-center">
										<i class="fa-solid fa-check text-eco-green mr-2 text-sm"></i>
										Gaming console repair
									</li>
									<li class="flex items-center">
										<i class="fa-solid fa-check text-eco-green mr-2 text-sm"></i>
										Data recovery services
									</li>
								</ul>
							</div>

							<div id="hours-info">
								<h3 class="mb-4 flex items-center text-lg font-semibold text-gray-900">
									<i class="fa-solid fa-clock text-eco-green mr-2"></i>
									Operating Hours
								</h3>
								<div class="space-y-2 text-gray-600">
									<div class="flex justify-between">
										<span>Monday - Friday</span>
										<span class="font-medium">9:00 AM - 7:00 PM</span>
									</div>
									<div class="flex justify-between">
										<span>Saturday</span>
										<span class="font-medium">10:00 AM - 5:00 PM</span>
									</div>
									<div class="flex justify-between">
										<span>Sunday</span>
										<span class="font-medium text-red-500">Closed</span>
									</div>
									<div class="bg-eco-light mt-3 rounded-lg p-3">
										<span class="text-eco-dark text-sm font-medium">
											<i class="fa-solid fa-circle text-eco-green mr-2 text-xs"></i>
											Open now - Closes at 7:00 PM
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						id="reviews-section"
						class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
					>
						<div class="mb-6 flex items-center justify-between">
							<h2 class="text-2xl font-bold text-gray-900">Reviews & Ratings</h2>
							<button class="text-eco-green hover:text-eco-dark font-medium">View All</button>
						</div>

						<div id="rating-summary" class="mb-6 rounded-xl bg-gray-50 p-6">
							<div class="flex items-center justify-between">
								<div>
									<div class="mb-2 flex items-center">
										<span class="mr-3 text-4xl font-bold text-gray-900">4.8</span>
										<div class="flex text-yellow-400">
											<i class="fa-solid fa-star"></i>
											<i class="fa-solid fa-star"></i>
											<i class="fa-solid fa-star"></i>
											<i class="fa-solid fa-star"></i>
											<i class="fa-solid fa-star"></i>
										</div>
									</div>
									<p class="text-gray-600">Based on 127 reviews</p>
								</div>
								<div class="text-right">
									<button
										class="bg-eco-green hover:bg-eco-dark rounded-lg px-6 py-3 font-medium text-white transition-colors"
									>
										Write Review
									</button>
								</div>
							</div>
						</div>

						<div id="recent-reviews" class="space-y-6">
							<div class="border-b border-gray-200 pb-6">
								<div class="flex items-start space-x-4">
									<img
										src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
										alt="Reviewer"
										class="h-12 w-12 rounded-full"
									/>
									<div class="flex-1">
										<div class="mb-2 flex items-center justify-between">
											<h4 class="font-semibold text-gray-900">Ahmad Rahman</h4>
											<span class="text-sm text-gray-500">2 days ago</span>
										</div>
										<div class="mb-3 flex items-center">
											<div class="mr-2 flex text-yellow-400">
												<i class="fa-solid fa-star text-sm"></i>
												<i class="fa-solid fa-star text-sm"></i>
												<i class="fa-solid fa-star text-sm"></i>
												<i class="fa-solid fa-star text-sm"></i>
												<i class="fa-solid fa-star text-sm"></i>
											</div>
											<span class="text-sm text-gray-600">Excellent service</span>
										</div>
										<p class="text-gray-700">
											Fixed my iPhone screen perfectly. Quick turnaround time and very reasonable
											pricing. Highly recommend!
										</p>
									</div>
								</div>
							</div>

							<div class="border-b border-gray-200 pb-6">
								<div class="flex items-start space-x-4">
									<img
										src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
										alt="Reviewer"
										class="h-12 w-12 rounded-full"
									/>
									<div class="flex-1">
										<div class="mb-2 flex items-center justify-between">
											<h4 class="font-semibold text-gray-900">Sarah Lim</h4>
											<span class="text-sm text-gray-500">1 week ago</span>
										</div>
										<div class="mb-3 flex items-center">
											<div class="mr-2 flex text-yellow-400">
												<i class="fa-solid fa-star text-sm"></i>
												<i class="fa-solid fa-star text-sm"></i>
												<i class="fa-solid fa-star text-sm"></i>
												<i class="fa-solid fa-star text-sm"></i>
												<i class="fa-regular fa-star text-sm"></i>
											</div>
											<span class="text-sm text-gray-600">Great experience</span>
										</div>
										<p class="text-gray-700">
											Professional staff and clean workspace. They recovered all my data from a
											damaged laptop. Very grateful!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="contact-sidebar" class="lg:col-span-1">
					<div class="sticky top-8 space-y-6">
						<div
							id="contact-card"
							class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
						>
							<h3 class="mb-6 text-xl font-bold text-gray-900">Contact Information</h3>

							<div class="space-y-4">
								<div class="flex items-center space-x-3">
									<div class="bg-eco-light flex h-10 w-10 items-center justify-center rounded-lg">
										<i class="fa-solid fa-phone text-eco-green"></i>
									</div>
									<div>
										<p class="text-sm text-gray-500">Phone</p>
										<p class="font-medium text-gray-900">+60 3-2234 5678</p>
									</div>
								</div>

								<div class="flex items-center space-x-3">
									<div class="bg-eco-light flex h-10 w-10 items-center justify-center rounded-lg">
										<i class="fa-solid fa-globe text-eco-green"></i>
									</div>
									<div>
										<p class="text-sm text-gray-500">Website</p>
										<span class="text-eco-green hover:text-eco-dark cursor-pointer font-medium"
											>ecofix.com.my</span
										>
									</div>
								</div>

								<div class="flex items-start space-x-3">
									<div class="bg-eco-light flex h-10 w-10 items-center justify-center rounded-lg">
										<i class="fa-solid fa-location-dot text-eco-green"></i>
									</div>
									<div>
										<p class="text-sm text-gray-500">Address</p>
										<p class="font-medium text-gray-900">
											123 Jalan Bukit Bintang<br />55100 Kuala Lumpur
										</p>
									</div>
								</div>
							</div>

							<button
								class="bg-eco-green hover:bg-eco-dark mt-6 w-full rounded-lg py-3 font-medium text-white transition-colors"
							>
								<i class="fa-solid fa-directions mr-2"></i>Get Directions
							</button>
						</div>

						<div id="action-card" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<h3 class="mb-6 text-xl font-bold text-gray-900">Quick Actions</h3>

							<div class="space-y-3">
								<button
									class="bg-eco-green hover:bg-eco-dark w-full rounded-lg py-3 font-medium text-white transition-colors"
								>
									<i class="fa-solid fa-check-in mr-2"></i>Check In
								</button>

								<button
									class="w-full rounded-lg bg-gray-100 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-200"
								>
									<i class="fa-regular fa-heart mr-2"></i>Save to Favorites
								</button>

								<button
									class="w-full rounded-lg bg-gray-100 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-200"
								>
									<i class="fa-solid fa-share mr-2"></i>Share Business
								</button>
							</div>
						</div>

						<div
							id="similar-businesses"
							class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
						>
							<h3 class="mb-6 text-xl font-bold text-gray-900">Similar Businesses</h3>

							<div class="space-y-4">
								<div
									class="flex cursor-pointer items-center space-x-3 rounded-lg p-3 hover:bg-gray-50"
								>
									<div class="bg-eco-light flex h-12 w-12 items-center justify-center rounded-lg">
										<i class="fa-solid fa-screwdriver-wrench text-eco-green"></i>
									</div>
									<div class="flex-1">
										<h4 class="font-medium text-gray-900">TechFix Solutions</h4>
										<p class="text-sm text-gray-500">3.2 km away</p>
									</div>
									<div class="flex items-center">
										<i class="fa-solid fa-star mr-1 text-sm text-yellow-400"></i>
										<span class="text-sm font-medium">4.5</span>
									</div>
								</div>

								<div
									class="flex cursor-pointer items-center space-x-3 rounded-lg p-3 hover:bg-gray-50"
								>
									<div class="bg-eco-light flex h-12 w-12 items-center justify-center rounded-lg">
										<i class="fa-solid fa-screwdriver-wrench text-eco-green"></i>
									</div>
									<div class="flex-1">
										<h4 class="font-medium text-gray-900">Digital Repair Hub</h4>
										<p class="text-sm text-gray-500">4.1 km away</p>
									</div>
									<div class="flex items-center">
										<i class="fa-solid fa-star mr-1 text-sm text-yellow-400"></i>
										<span class="text-sm font-medium">4.2</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>

		<footer id="footer" class="mt-16 bg-gray-900 py-12 text-white">
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
			document.getElementById('back-button').addEventListener('click', function () {
				window.history.back();
			});

			document.querySelectorAll('button').forEach((button) => {
				button.addEventListener('click', function (e) {
					if (this.querySelector('.fa-heart')) {
						const icon = this.querySelector('.fa-heart');
						if (icon.classList.contains('fa-regular')) {
							icon.classList.remove('fa-regular');
							icon.classList.add('fa-solid');
							icon.style.color = '#ef4444';
						} else {
							icon.classList.remove('fa-solid');
							icon.classList.add('fa-regular');
							icon.style.color = '';
						}
					}
				});
			});
		</script>
	</body>
</html>
