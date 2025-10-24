<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>window.FontAwesomeConfig = { autoReplaceSvg: 'nest'};</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        ::-webkit-scrollbar { display: none;}
        body { font-family: 'Inter', sans-serif; }
        .map-container { height: 400px; }
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
        }
    </script>
</head>
<body class="bg-gray-50">
    
    <header id="header" class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div id="logo-section" class="flex items-center">
                    <div class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-eco-green rounded-lg flex items-center justify-center">
                            <i class="fa-solid fa-recycle text-white text-xl"></i>
                        </div>
                        <span class="text-2xl font-bold text-eco-dark">SMW</span>
                    </div>
                </div>
                
                <div id="nav-actions" class="flex items-center space-x-4">
                    <button class="bg-eco-green text-white px-6 py-2 rounded-lg font-medium hover:bg-eco-dark transition-colors">
                        <i class="fa-solid fa-plus mr-2"></i>Add Listing
                    </button>
                    <button class="text-gray-600 hover:text-eco-green font-medium px-4 py-2">Sign In</button>
                    <button class="bg-eco-light text-eco-dark px-6 py-2 rounded-lg font-medium hover:bg-eco-green hover:text-white transition-colors">Sign Up</button>
                </div>
            </div>
        </div>
    </header>

    <main id="main-content" class="flex flex-col lg:flex-row h-screen">
        <section id="results-section" class="lg:w-1/3 bg-white border-r border-gray-200 flex flex-col">
            <div id="results-header" class="border-b border-gray-200 p-4">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold text-gray-900">Results (24)</h2>
                    <button id="filter-btn" class="text-eco-green hover:text-eco-dark flex items-center space-x-1">
                        <i class="fa-solid fa-filter"></i>
                        <span class="text-sm font-medium">Filters</span>
                    </button>
                </div>
                
                <div id="sort-controls" class="flex space-x-2">
                    <button class="bg-eco-green text-white px-3 py-2 rounded-lg text-sm font-medium">Distance</button>
                    <button class="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Rating</button>
                    <button class="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">Name</button>
                </div>
            </div>
            
            <div id="results-list" class="flex-1 overflow-y-auto">
                <div id="result-card-1" class="border-b border-gray-100 p-4 hover:bg-gray-50 cursor-pointer">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-semibold text-gray-900">TechFix Solutions</h3>
                        <span class="text-sm text-gray-600">0.8km</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <span class="bg-eco-light text-eco-dark px-2 py-1 rounded-full text-xs font-medium">Electronics</span>
                        <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">Mobile Phones</span>
                    </div>
                    <div class="flex items-center space-x-1 mb-3">
                        <div class="flex text-yellow-400">
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-regular fa-star text-sm"></i>
                        </div>
                        <span class="text-sm text-gray-600">(42 reviews)</span>
                    </div>
                    <button class="w-full bg-eco-light text-eco-dark py-2 rounded-lg font-medium hover:bg-eco-green hover:text-white transition-colors">
                        View Details
                    </button>
                </div>

                <div id="result-card-2" class="border-b border-gray-100 p-4 hover:bg-gray-50 cursor-pointer">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-semibold text-gray-900">Fix & Go Appliances</h3>
                        <span class="text-sm text-gray-600">1.2km</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <span class="bg-eco-light text-eco-dark px-2 py-1 rounded-full text-xs font-medium">Appliances</span>
                        <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">Home</span>
                    </div>
                    <div class="flex items-center space-x-1 mb-3">
                        <div class="flex text-yellow-400">
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                        </div>
                        <span class="text-sm text-gray-600">(28 reviews)</span>
                    </div>
                    <button class="w-full bg-eco-light text-eco-dark py-2 rounded-lg font-medium hover:bg-eco-green hover:text-white transition-colors">
                        View Details
                    </button>
                </div>

                <div id="result-card-3" class="border-b border-gray-100 p-4 hover:bg-gray-50 cursor-pointer">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-semibold text-gray-900">Stitch & Mend Tailor</h3>
                        <span class="text-sm text-gray-600">1.5km</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <span class="bg-eco-light text-eco-dark px-2 py-1 rounded-full text-xs font-medium">Clothing</span>
                        <span class="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium">Alterations</span>
                    </div>
                    <div class="flex items-center space-x-1 mb-3">
                        <span class="text-sm text-gray-600">No reviews yet</span>
                    </div>
                    <button class="w-full bg-eco-light text-eco-dark py-2 rounded-lg font-medium hover:bg-eco-green hover:text-white transition-colors">
                        View Details
                    </button>
                </div>

                <div id="result-card-4" class="border-b border-gray-100 p-4 hover:bg-gray-50 cursor-pointer">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-semibold text-gray-900">Quick Electronics Repair</h3>
                        <span class="text-sm text-gray-600">2.1km</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <span class="bg-eco-light text-eco-dark px-2 py-1 rounded-full text-xs font-medium">Electronics</span>
                        <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">Laptops</span>
                    </div>
                    <div class="flex items-center space-x-1 mb-3">
                        <div class="flex text-yellow-400">
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-regular fa-star text-sm"></i>
                            <i class="fa-regular fa-star text-sm"></i>
                        </div>
                        <span class="text-sm text-gray-600">(15 reviews)</span>
                    </div>
                    <button class="w-full bg-eco-light text-eco-dark py-2 rounded-lg font-medium hover:bg-eco-green hover:text-white transition-colors">
                        View Details
                    </button>
                </div>

                <div id="loading-skeleton" class="hidden">
                    <div class="border-b border-gray-100 p-4">
                        <div class="animate-pulse">
                            <div class="flex justify-between items-start mb-2">
                                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div class="h-4 bg-gray-200 rounded w-12"></div>
                            </div>
                            <div class="flex space-x-2 mb-2">
                                <div class="h-6 bg-gray-200 rounded-full w-16"></div>
                                <div class="h-6 bg-gray-200 rounded-full w-20"></div>
                            </div>
                            <div class="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                            <div class="h-8 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>

                <div id="empty-state" class="hidden p-8 text-center">
                    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                    <p class="text-gray-600 mb-4">Try expanding your search radius or adjusting your filters</p>
                    <button class="bg-eco-green text-white px-6 py-2 rounded-lg font-medium hover:bg-eco-dark transition-colors">
                        Expand Search
                    </button>
                </div>
            </div>
        </section>

        <section id="map-section" class="lg:w-2/3 bg-white relative">
            <div id="map-header" class="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <button id="back-btn" class="text-gray-600 hover:text-eco-green">
                        <i class="fa-solid fa-arrow-left text-lg"></i>
                    </button>
                    <div>
                        <h1 class="text-xl font-semibold text-gray-900">Repair Shops</h1>
                        <p class="text-sm text-gray-600">Within 5km • 24 results found</p>
                    </div>
                </div>
                
                <div id="map-controls" class="flex items-center space-x-2">
                    <button id="recenter-btn" class="bg-white border border-gray-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center space-x-2">
                        <i class="fa-solid fa-crosshairs text-gray-600"></i>
                        <span>Recenter</span>
                    </button>
                    <button id="location-btn" class="bg-eco-green text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-eco-dark flex items-center space-x-2">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>My Location</span>
                    </button>
                </div>
            </div>
            
            <div id="map-container" class="map-container bg-gray-100 relative">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm">
                        <div class="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fa-solid fa-map-location-dot text-eco-green text-xl"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Interactive Map View</h3>
                        <p class="text-gray-600 text-sm">Click on pins to preview business details</p>
                    </div>
                </div>
                
                <div id="map-pins" class="absolute inset-0">
                    <div class="absolute top-16 left-20 w-8 h-8 bg-eco-green rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        <i class="fa-solid fa-screwdriver-wrench text-white text-sm"></i>
                    </div>
                    <div class="absolute top-32 left-40 w-8 h-8 bg-eco-green rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        <i class="fa-solid fa-screwdriver-wrench text-white text-sm"></i>
                    </div>
                    <div class="absolute top-48 left-32 w-8 h-8 bg-eco-green rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        <i class="fa-solid fa-screwdriver-wrench text-white text-sm"></i>
                    </div>
                    <div class="absolute top-24 right-32 w-8 h-8 bg-eco-green rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        <i class="fa-solid fa-screwdriver-wrench text-white text-sm"></i>
                    </div>
                </div>
                
                <div id="pin-preview" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 w-80 hidden">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-semibold text-gray-900">TechFix Solutions</h4>
                        <button class="text-gray-400 hover:text-gray-600">
                            <i class="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <div class="flex items-center space-x-2 mb-2">
                        <span class="bg-eco-light text-eco-dark px-2 py-1 rounded-full text-xs font-medium">Electronics</span>
                        <span class="text-gray-600 text-sm">• 0.8km away</span>
                    </div>
                    <div class="flex items-center space-x-1 mb-3">
                        <div class="flex text-yellow-400">
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-solid fa-star text-sm"></i>
                            <i class="fa-regular fa-star text-sm"></i>
                        </div>
                        <span class="text-sm text-gray-600">(42 reviews)</span>
                    </div>
                    <button class="w-full bg-eco-green text-white py-2 rounded-lg font-medium hover:bg-eco-dark transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </section>
    </main>

    <div id="filter-drawer" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
        <div class="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div class="border-b border-gray-200 p-4 flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-900">Filters</h3>
                <button id="close-filter" class="text-gray-400 hover:text-gray-600">
                    <i class="fa-solid fa-times text-lg"></i>
                </button>
            </div>
            
            <div class="p-4 space-y-6">
                <div id="distance-filter">
                    <h4 class="font-medium text-gray-900 mb-3">Distance</h4>
                    <div class="space-y-2">
                        <label class="flex items-center space-x-3">
                            <input type="radio" name="distance" class="text-eco-green focus:ring-eco-green" checked>
                            <span>Within 5km</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="radio" name="distance" class="text-eco-green focus:ring-eco-green">
                            <span>Within 10km</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="radio" name="distance" class="text-eco-green focus:ring-eco-green">
                            <span>Within 20km</span>
                        </label>
                    </div>
                </div>
                
                <div id="category-filter">
                    <h4 class="font-medium text-gray-900 mb-3">Categories</h4>
                    <div class="space-y-2">
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" class="text-eco-green focus:ring-eco-green" checked>
                            <span>Electronics</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" class="text-eco-green focus:ring-eco-green">
                            <span>Appliances</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" class="text-eco-green focus:ring-eco-green">
                            <span>Clothing</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" class="text-eco-green focus:ring-eco-green">
                            <span>Furniture</span>
                        </label>
                    </div>
                </div>
                
                <div id="rating-filter">
                    <h4 class="font-medium text-gray-900 mb-3">Rating</h4>
                    <div class="space-y-2">
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" class="text-eco-green focus:ring-eco-green">
                            <span>4+ stars</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" class="text-eco-green focus:ring-eco-green">
                            <span>3+ stars</span>
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4 bg-white">
                <div class="flex space-x-3">
                    <button class="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200">Clear All</button>
                    <button class="flex-1 bg-eco-green text-white py-2 rounded-lg font-medium hover:bg-eco-dark">Apply Filters</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.getElementById('filter-btn').addEventListener('click', function() {
            document.getElementById('filter-drawer').classList.remove('hidden');
        });

        document.getElementById('close-filter').addEventListener('click', function() {
            document.getElementById('filter-drawer').classList.add('hidden');
        });

        document.querySelectorAll('#sort-controls button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('#sort-controls button').forEach(btn => {
                    btn.classList.remove('bg-eco-green', 'text-white');
                    btn.classList.add('bg-gray-100', 'text-gray-700');
                });
                
                this.classList.remove('bg-gray-100', 'text-gray-700');
                this.classList.add('bg-eco-green', 'text-white');
            });
        });

        document.querySelectorAll('#map-pins > div').forEach(pin => {
            pin.addEventListener('click', function() {
                document.getElementById('pin-preview').classList.remove('hidden');
            });
        });

        document.querySelector('#pin-preview button').addEventListener('click', function() {
            document.getElementById('pin-preview').classList.add('hidden');
        });
    </script>

</body>
</html>