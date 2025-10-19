<!-- @migration-task Error while migrating Svelte code: Cannot use `export let` in runes mode — use `$props()` instead
https://svelte.dev/e/legacy_export_invalid -->
<!-- 
  Create Deal Page
  Allows merchants to create new deals
-->

<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

	/** @type {any} */
	const { data } = $props();

	// Reactive state using Svelte 5 runes
	const formState = $state({
		merchantId: $page.params.id,
		title: '',
		description: '',
		discountType: 'percentage',
		discountValue: '',
		minPurchase: '',
		startDate: '',
		endDate: '',
		termsAndConditions: '',
		isLimitedQuantity: false,
		maxRedemptions: '',
		currentStep: 1,
		isSubmitting: false,
		/** @type {string | null} */
		error: null
	});

	// Derived values
	const isStep1Valid = $derived(
		formState.title.trim() !== '' &&
			formState.description.trim() !== '' &&
			formState.discountValue.trim() !== ''
	);

	const isStep2Valid = $derived(
		formState.startDate !== '' &&
			formState.endDate !== '' &&
			formState.termsAndConditions.trim() !== ''
	);

	// Handle form navigation
	function nextStep() {
		if (formState.currentStep === 1 && isStep1Valid) {
			formState.currentStep = 2;
		}
	}

	function prevStep() {
		if (formState.currentStep === 2) {
			formState.currentStep = 1;
		}
	}

	// File validation
	/** @param {File} file @returns {string | null} */
	function validateFile(file) {
		const MAX_FILE_SIZE = 5 * 1024 * 1024;
		const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
		if (!ALLOWED_TYPES.includes(file.type))
			return 'File type not supported. Please upload a JPG, PNG, or GIF.';
		if (file.size > MAX_FILE_SIZE) return 'File size too large. Maximum size is 5MB.';
		return null;
	}

    // Min end date (>= 7 days from today) as a function for template use
    /** @returns {string} */
    function minEndDate() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const min = new Date(today);
        min.setDate(today.getDate() + 7);
        return min.toISOString().split('T')[0];
    }

	// Enhance: upload image to S3 and map v2 fields to API contract
	/** @param {{ formData: FormData }} param0
	 *  @returns {Promise<((args: { result: any, update: () => Promise<void> }) => Promise<void>)|void>}
	 */
	async function handleEnhance({ formData }) {
		formState.error = null;

		// Step validation guard
		if (!isStep2Valid) {
			formState.error = 'Please complete all required fields.';
			return;
		}

		// Ensure required API fields are included/mapped
		// - title is already in the form via input name
		// - originalPrice via input name
		// - discount derived from discountType/discountValue
		// - category via input name
		// - expiration derived from endDate

		// Compute discount
		let discount = 0;
		if (formState.discountType === 'percentage') {
			const pct = Number(String(formState.discountValue).trim());
			discount = Number.isFinite(pct) ? Math.min(Math.max(pct, 0), 100) : 0;
		} else {
			// Unsupported types (fixed/BOGO) for now
			formState.error = 'Only percentage discounts are supported currently.';
			return;
		}
		formData.set('discount', String(discount));

		// Expiration from endDate (as ISO date-time)
		if (!formState.endDate) {
			formState.error = 'End date is required';
			return;
		}
		const end = new Date(formState.endDate);
		const expirationIso = new Date(
			Date.UTC(end.getFullYear(), end.getMonth(), end.getDate(), 0, 0, 0)
		).toISOString();
		formData.set('expiration', expirationIso);

		// Upload logo to S3 and set logoFileKey
		const file = formData.get('logo');
		if (!(file instanceof File)) {
			formState.error = 'Please select a logo file';
			return;
		}
		const fileError = validateFile(file);
		if (fileError) {
			formState.error = fileError;
			return;
		}

		if (!data?.credentials || !data?.s3BucketName) {
			formState.error = 'Missing upload credentials. Please refresh and try again.';
			return;
		}

		formState.isSubmitting = true;
		try {
			const s3Client = new S3Client({
				region: 'us-east-1',
				credentials: {
					accessKeyId: data.credentials.accessKeyId,
					secretAccessKey: data.credentials.secretAccessKey,
					sessionToken: data.credentials.sessionToken
				}
			});

			const key = `merchants/${data.userId}/deals/uploads/${Date.now()}-${file.name}`;
			await s3Client.send(
				new PutObjectCommand({
					Bucket: data.s3BucketName,
					Key: key,
					Body: file,
					ContentType: file.type
				})
			);

			formData.delete('logo');
			formData.set('logoFileKey', key);
		} catch (e) {
			console.error('S3 upload failed', e);
			formState.error = 'Failed to upload image. Please try again.';
			return;
		} finally {
			formState.isSubmitting = false;
		}

		// Let SvelteKit proceed with the submit
		/** @param {{ result: any, update: () => Promise<void> }} args */
		return async ({ result, update }) => {
			if (result.type === 'failure') {
				// errors handled by action; keep message visible
			}
			await update();
		};
	}

	// Local draft persistence (UX)
	const DRAFT_KEY = 'createDealDraft';
	if (typeof localStorage !== 'undefined') {
		// Rehydrate
		const raw = localStorage.getItem(DRAFT_KEY);
		if (raw) {
			try {
				const draft = JSON.parse(raw);
				Object.assign(formState, draft);
			} catch {}
		}
	}

	$effect(() => {
		if (typeof localStorage === 'undefined') return;
		const {
			title,
			description,
			discountType,
			discountValue,
			minPurchase,
			startDate,
			endDate,
			termsAndConditions,
			isLimitedQuantity,
			maxRedemptions,
			currentStep
		} = formState;
		const draft = {
			title,
			description,
			discountType,
			discountValue,
			minPurchase,
			startDate,
			endDate,
			termsAndConditions,
			isLimitedQuantity,
			maxRedemptions,
			currentStep
		};
		localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
	});
</script>

<div class="create-deal-page">
	<div class="page-header mb-6">
		<h1 class="text-2xl font-bold">Create New Deal</h1>
		<p class="text-gray-600">Create a new deal to attract customers</p>
	</div>

	<!-- Form Steps -->
	<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
		<div class="steps-header flex border-b border-gray-200">
			<button
				class="flex-1 px-6 py-4 text-center font-medium {formState.currentStep === 1
					? 'border-b-2 border-blue-600 text-blue-600'
					: 'text-gray-500 hover:text-gray-700'}"
				onclick={() => (formState.currentStep = 1)}
				type="button"
			>
				1. Deal Details
			</button>
			<button
				class="flex-1 px-6 py-4 text-center font-medium {formState.currentStep === 2
					? 'border-b-2 border-blue-600 text-blue-600'
					: 'text-gray-500 hover:text-gray-700'}"
				onclick={() => isStep1Valid && (formState.currentStep = 2)}
				disabled={!isStep1Valid}
				type="button"
			>
				2. Schedule & Terms
			</button>
		</div>

		<div class="p-6">
			<form
				method="POST"
				enctype="multipart/form-data"
				use:enhance={handleEnhance}
				class="space-y-6"
			>
				{#if formState.currentStep === 1}
					<!-- Step 1: Deal Details -->
					<div class="form-group">
						<label for="title" class="mb-1 block text-sm font-medium text-gray-700"
							>Deal Title *</label
						>
						<input
							type="text"
							id="title"
							name="title"
							bind:value={formState.title}
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
							placeholder="e.g. 20% Off All Electronics"
							required
						/>
					</div>

					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="form-group">
							<label for="originalPrice" class="mb-1 block text-sm font-medium text-gray-700"
								>Original Price *</label
							>
							<input
								type="number"
								id="originalPrice"
								name="originalPrice"
								min="1"
								step="0.01"
								required
								class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
							/>
						</div>

						<div class="form-group">
							<label for="category" class="mb-1 block text-sm font-medium text-gray-700"
								>Category *</label
							>
							<select
								id="category"
								name="category"
								required
								class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
							>
								<option value="">Select a category</option>
								<option value="foodDrink">Food & Drink</option>
								<option value="bathroom">Bathroom</option>
								<option value="jewelery">Jewelery</option>
								<option value="sports">Sports</option>
								<option value="tech">Tech</option>
								<option value="auto">Auto</option>
								<option value="entertainment">Entertainment</option>
								<option value="travel">Travel</option>
							</select>
						</div>
					</div>

					<div class="form-group">
						<label for="description" class="mb-1 block text-sm font-medium text-gray-700"
							>Description *</label
						>
						<textarea
							id="description"
							bind:value={formState.description}
							rows="3"
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
							placeholder="Describe your deal"
							required
						></textarea>
					</div>

					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="form-group">
							<label for="discountType" class="mb-1 block text-sm font-medium text-gray-700"
								>Discount Type *</label
							>
							<select
								id="discountType"
								bind:value={formState.discountType}
								class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
							>
								<option value="percentage">Percentage (%)</option>
								<option value="fixed">Fixed Amount ($)</option>
								<option value="buyOneGetOne">Buy One Get One</option>
							</select>
						</div>

						<div class="form-group">
							<label for="discountValue" class="mb-1 block text-sm font-medium text-gray-700">
								{formState.discountType === 'percentage'
									? 'Discount Percentage *'
									: formState.discountType === 'fixed'
										? 'Discount Amount *'
										: 'Number of Free Items *'}
							</label>
							<div class="relative mt-1 rounded-md shadow-sm">
								{#if formState.discountType === 'fixed'}
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<span class="text-gray-500 sm:text-sm">$</span>
									</div>
								{/if}
								<input
									type="text"
									id="discountValue"
									bind:value={formState.discountValue}
									class="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm {formState.discountType ===
									'fixed'
										? 'pl-7'
										: ''} {formState.discountType === 'percentage'
										? 'pr-7'
										: ''} focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
									placeholder={formState.discountType === 'percentage'
										? '20'
										: formState.discountType === 'fixed'
											? '10.00'
											: '1'}
									required
								/>
								{#if formState.discountType === 'percentage'}
									<div
										class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
									>
										<span class="text-gray-500 sm:text-sm">%</span>
									</div>
								{/if}
							</div>
						</div>
					</div>

					<div class="form-group">
						<label for="minPurchase" class="mb-1 block text-sm font-medium text-gray-700"
							>Minimum Purchase (Optional)</label
						>
						<div class="relative mt-1 rounded-md shadow-sm">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<span class="text-gray-500 sm:text-sm">$</span>
							</div>
							<input
								type="text"
								id="minPurchase"
								bind:value={formState.minPurchase}
								class="block w-full rounded-md border border-gray-300 px-3 py-2 pl-7 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
								placeholder="0.00"
							/>
						</div>
						<p class="mt-1 text-xs text-gray-500">
							Leave empty if there's no minimum purchase required
						</p>
					</div>

					<div class="form-actions">
						<button
							type="button"
							onclick={nextStep}
							disabled={!isStep1Valid}
							class="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						>
							Continue to Schedule & Terms
						</button>
					</div>
				{:else}
					<!-- Step 2: Schedule & Terms -->
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="form-group">
							<label for="startDate" class="mb-1 block text-sm font-medium text-gray-700"
								>Start Date *</label
							>
							<input
								type="date"
								id="startDate"
								bind:value={formState.startDate}
								class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
								required
							/>
						</div>

						<div class="form-group">
							<label for="endDate" class="mb-1 block text-sm font-medium text-gray-700"
								>End Date *</label
							>
							<input
								type="date"
								id="endDate"
								bind:value={formState.endDate}
								min={minEndDate()}
								class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
								required
							/>
						</div>
					</div>

					<div class="form-group">
						<div class="flex items-start">
							<div class="flex h-5 items-center">
								<input
									id="isLimitedQuantity"
									type="checkbox"
									bind:checked={formState.isLimitedQuantity}
									class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
								/>
							</div>
							<div class="ml-3 text-sm">
								<label for="isLimitedQuantity" class="font-medium text-gray-700"
									>Limit number of redemptions</label
								>
								<p class="text-gray-500">Set a maximum number of times this deal can be redeemed</p>
							</div>
						</div>
					</div>

					{#if formState.isLimitedQuantity}
						<div class="form-group">
							<label for="maxRedemptions" class="mb-1 block text-sm font-medium text-gray-700"
								>Maximum Redemptions *</label
							>
							<input
								type="number"
								id="maxRedemptions"
								bind:value={formState.maxRedemptions}
								min="1"
								class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
								required={formState.isLimitedQuantity}
							/>
						</div>
					{/if}

					<div class="form-group">
						<label for="termsAndConditions" class="mb-1 block text-sm font-medium text-gray-700"
							>Terms and Conditions *</label
						>
						<textarea
							id="termsAndConditions"
							bind:value={formState.termsAndConditions}
							rows="4"
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
							placeholder="Enter terms and conditions for this deal"
							required
						></textarea>
					</div>

					{#if formState.error}
						<div
							class="relative rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700"
							role="alert"
						>
							<span class="block sm:inline">{formState.error}</span>
						</div>
					{/if}

					<div class="flex justify-between">
						<button
							type="button"
							onclick={prevStep}
							class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Back to Deal Details
						</button>

						<button
							type="submit"
							disabled={!isStep2Valid || formState.isSubmitting}
							class="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{#if formState.isSubmitting}
								<span class="flex items-center">
									<span class="loading-spinner mr-2"></span>
									Creating...
								</span>
							{:else}
								Create Deal
							{/if}
						</button>
					</div>
				{/if}
			</form>
		</div>
	</div>
</div>

<style>
	.loading-spinner {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		border-top-color: white;
		animation: spin 1s ease-in-out infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
