<script>
  // Import necessary components
  import NavigationProperty1OnWhite from "@/NavigationProperty1OnWhite/NavigationProperty1OnWhite.svelte";
  import Footer from "@/Footer/Footer.svelte";
  import ContactModal from "@/ContactModal.svelte";
  
  let className = "";
  export { className as class };
  
  let showModal = false;
  const openModal = () => (showModal = true);
  const closeModal = () => (showModal = false);

  // Property search state
  let searchFilters = {
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: ''
  };

  // Sample property data structure
  let properties = [
    // Add your property data here
  ];
</script>

<div class={'bg-neutral-white min-h-screen relative overflow-x-hidden ' + className}>
  <!-- Sticky Navigation Header -->
  <div class="sticky top-0 z-50 bg-theme-colors-color-02/95 backdrop-blur-sm border-b border-theme-colors-color-02/20 shadow-sm">
    <NavigationProperty1OnWhite
      property1="on-dark"
      class="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
    />
  </div>

  <!-- Hero Section -->
  <section id="properties-hero" class="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
    <!-- Add your properties hero background image here -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-white mb-6">
          Find Your Dream Property
        </h1>
        <p class="text-lg sm:text-xl text-neutral-white/90 mb-8">
          Discover the perfect home from our extensive property listings
        </p>
      </div>
    </div>
  </section>

  <!-- Search Filters Section -->
  <section id="search-filters" class="py-8 sm:py-12 lg:py-16 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-neutral-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <h2 class="text-2xl font-bold text-neutral-neutral-04 mb-6">Search Properties</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <!-- Add search filter inputs here -->
          <div>
            <label class="block text-sm font-medium text-neutral-neutral-04 mb-2">Location</label>
            <!-- Add location input -->
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-neutral-04 mb-2">Property Type</label>
            <!-- Add property type select -->
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-neutral-04 mb-2">Price Range</label>
            <!-- Add price range select -->
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-neutral-04 mb-2">Bedrooms</label>
            <!-- Add bedrooms select -->
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-neutral-04 mb-2">Bathrooms</label>
            <!-- Add bathrooms select -->
          </div>
        </div>
        <div class="mt-6">
          <!-- Add search button here -->
        </div>
      </div>
    </div>
  </section>

  <!-- Property Listings Section -->
  <section id="property-listings" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-neutral-neutral-04">
          Available Properties
        </h2>
        <div class="flex items-center gap-4">
          <!-- Add sort dropdown here -->
          <select class="border border-neutral-neutral-03 rounded-lg px-4 py-2">
            <option>Sort by Price</option>
            <option>Sort by Date</option>
            <option>Sort by Size</option>
          </select>
        </div>
      </div>

      <!-- Property Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Add property cards here -->
        <!-- Each card should include: image, price, address, bedrooms, bathrooms, sqft, etc. -->
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex justify-center">
        <!-- Add pagination component here -->
      </div>
    </div>
  </section>

  <!-- Featured Properties Section -->
  <section id="featured-properties" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Featured Properties
      </h2>
      <!-- Add featured property cards here -->
    </div>
  </section>

  <!-- Property Types Section -->
  <section id="property-types" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Property Types
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Add property type cards (Houses, Apartments, Commercial, etc.) -->
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer class="w-full" />

  <!-- Contact Modal -->
  <ContactModal open={showModal} on:close={closeModal} />
</div>

<style>
  /* Add your properties page specific styles here */
</style> 