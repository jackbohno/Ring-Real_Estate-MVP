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
  <section id="hero" class="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
    <!-- Add your hero background image and content here -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-neutral-04 mb-6">
          Welcome to HomeQuest
        </h1>
        <p class="text-lg sm:text-xl text-neutral-neutral-03 mb-8">
          Your trusted partner in real estate
        </p>
        <!-- Add CTA button here -->
      </div>
    </div>
  </section>

  <!-- Services Overview Section -->
  <section id="services-overview" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Our Services
      </h2>
      <!-- Add services grid here -->
    </div>
  </section>

  <!-- Featured Properties Section -->
  <section id="featured-properties" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Featured Properties
      </h2>
      <!-- Add property cards here -->
    </div>
  </section>

  <!-- About Preview Section -->
  <section id="about-preview" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Add about us preview content here -->
    </div>
  </section>

  <!-- CTA Section -->
  <section id="cta" class="py-16 sm:py-20 lg:py-24 bg-theme-colors-color-02">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <!-- Add call-to-action content here -->
    </div>
  </section>

  <!-- Footer -->
  <Footer class="w-full" />

  <!-- Contact Modal -->
  <ContactModal open={showModal} on:close={closeModal} />
</div>

<style>
  /* Add your homepage-specific styles here */
</style> 