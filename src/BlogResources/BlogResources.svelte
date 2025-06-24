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

  // Blog posts data structure
  let blogPosts = [
    // Add your blog posts data here
  ];

  // Resource categories
  let resourceCategories = [
    'Buying Guides',
    'Selling Tips',
    'Market Insights',
    'Investment Advice',
    'Legal Information',
    'Home Maintenance'
  ];

  let selectedCategory = 'All';
  let searchQuery = '';
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
  <section id="blog-hero" class="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
    <!-- Add your blog hero background image here -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-white mb-6">
          Real Estate Resources & Blog
        </h1>
        <p class="text-lg sm:text-xl text-neutral-white/90 mb-8">
          Expert insights, market trends, and helpful guides for your real estate journey
        </p>
      </div>
    </div>
  </section>

  <!-- Search & Filter Section -->
  <section id="blog-filters" class="py-8 sm:py-12 lg:py-16 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-neutral-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <!-- Search Bar -->
          <div class="flex-1 max-w-md">
            <label for="search" class="block text-sm font-medium text-neutral-neutral-04 mb-2">
              Search Articles
            </label>
            <input
              id="search"
              type="text"
              bind:value={searchQuery}
              placeholder="Search by title, topic, or keyword..."
              class="w-full border border-neutral-neutral-03 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent"
            />
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-medium text-neutral-neutral-04 mb-2">
              Category
            </label>
            <select
              bind:value={selectedCategory}
              class="border border-neutral-neutral-03 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent"
            >
              <option value="All">All Categories</option>
              {#each resourceCategories as category}
                <option value={category}>{category}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Articles Section -->
  <section id="featured-articles" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Featured Articles
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <!-- Add featured article cards here -->
        <article class="bg-neutral-white rounded-2xl shadow-lg overflow-hidden border border-neutral-neutral-01">
          <div class="h-48 bg-neutral-neutral-01">
            <!-- Add article image here -->
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="bg-theme-colors-color-01 text-neutral-neutral-04 px-3 py-1 rounded-full text-sm font-medium">
                Market Insights
              </span>
              <span class="text-neutral-neutral-03 text-sm">Jan 15, 2024</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-3">
              Article Title Here
            </h3>
            <p class="text-neutral-neutral-03 mb-4">
              Article excerpt goes here...
            </p>
            <a href="#" class="text-theme-colors-color-02 font-medium hover:underline">
              Read More →
            </a>
          </div>
        </article>
        <!-- Repeat for more featured articles -->
      </div>
    </div>
  </section>

  <!-- All Articles Section -->
  <section id="all-articles" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Latest Articles
      </h2>
      
      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Add article cards here -->
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-theme-colors-color-02 text-neutral-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Load More Articles
        </button>
      </div>
    </div>
  </section>

  <!-- Resource Categories Section -->
  <section id="resource-categories" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Browse by Category
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each resourceCategories as category}
          <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01 hover:shadow-xl transition-shadow cursor-pointer">
            <h3 class="text-lg font-semibold text-neutral-neutral-04 mb-3">{category}</h3>
            <p class="text-neutral-neutral-03 mb-4">Explore articles about {category.toLowerCase()}</p>
            <span class="text-theme-colors-color-02 font-medium">View Articles →</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Downloadable Resources Section -->
  <section id="downloadable-resources" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Free Downloadable Resources
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Add downloadable resource cards here -->
        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <div class="bg-theme-colors-color-01 rounded-lg p-4 mb-4 text-center">
            <span class="text-2xl">📋</span>
          </div>
          <h3 class="text-lg font-semibold text-neutral-neutral-04 mb-3">
            First-Time Buyer Checklist
          </h3>
          <p class="text-neutral-neutral-03 mb-4">
            Complete guide for first-time home buyers
          </p>
          <button class="w-full bg-theme-colors-color-02 text-neutral-white py-3 rounded-lg hover:opacity-90 transition-opacity">
            Download PDF
          </button>
        </div>
        
        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <div class="bg-theme-colors-color-01 rounded-lg p-4 mb-4 text-center">
            <span class="text-2xl">📊</span>
          </div>
          <h3 class="text-lg font-semibold text-neutral-neutral-04 mb-3">
            Property Valuation Guide
          </h3>
          <p class="text-neutral-neutral-03 mb-4">
            Learn how to value your property accurately
          </p>
          <button class="w-full bg-theme-colors-color-02 text-neutral-white py-3 rounded-lg hover:opacity-90 transition-opacity">
            Download PDF
          </button>
        </div>

        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <div class="bg-theme-colors-color-01 rounded-lg p-4 mb-4 text-center">
            <span class="text-2xl">🏠</span>
          </div>
          <h3 class="text-lg font-semibold text-neutral-neutral-04 mb-3">
            Home Maintenance Calendar
          </h3>
          <p class="text-neutral-neutral-03 mb-4">
            Monthly home maintenance checklist
          </p>
          <button class="w-full bg-theme-colors-color-02 text-neutral-white py-3 rounded-lg hover:opacity-90 transition-opacity">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter Signup Section -->
  <section id="newsletter" class="py-16 sm:py-20 lg:py-24 bg-theme-colors-color-02">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-neutral-white mb-6">
        Stay Updated
      </h2>
      <p class="text-lg text-neutral-white/90 mb-8">
        Subscribe to our newsletter for the latest real estate insights and market updates.
      </p>
      <div class="max-w-md mx-auto">
        <div class="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg border border-neutral-neutral-03 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-01"
          />
          <button class="bg-theme-colors-color-01 text-neutral-neutral-04 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer class="w-full" />

  <!-- Contact Modal -->
  <ContactModal open={showModal} on:close={closeModal} />
</div>

<style>
  /* Add your blog/resources page specific styles here */
</style> 