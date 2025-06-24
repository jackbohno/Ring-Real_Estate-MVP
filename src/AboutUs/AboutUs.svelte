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
  <section id="about-hero" class="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
    <!-- Add your about hero background image here -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-white mb-6">
          About HomeQuest
        </h1>
        <p class="text-lg sm:text-xl text-neutral-white/90 mb-8">
          Your trusted real estate partner since [year]
        </p>
      </div>
    </div>
  </section>

  <!-- Company Story Section -->
  <section id="company-story" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-neutral-neutral-04 mb-6">
            Our Story
          </h2>
          <!-- Add company story content here -->
        </div>
        <div>
          <!-- Add company story image here -->
        </div>
      </div>
    </div>
  </section>

  <!-- Mission & Values Section -->
  <section id="mission-values" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Mission & Values
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Add mission and values cards here -->
        <div class="text-center">
          <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Mission</h3>
          <!-- Add mission content -->
        </div>
        <div class="text-center">
          <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Vision</h3>
          <!-- Add vision content -->
        </div>
        <div class="text-center">
          <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Values</h3>
          <!-- Add values content -->
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section id="team" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Meet Our Team
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <!-- Add team member cards here -->
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section id="why-choose-us" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Why Choose HomeQuest?
      </h2>
      <!-- Add reasons/benefits grid here -->
    </div>
  </section>

  <!-- Awards & Recognition Section -->
  <section id="awards" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Awards & Recognition
      </h2>
      <!-- Add awards and certifications here -->
    </div>
  </section>

  <!-- Footer -->
  <Footer class="w-full" />

  <!-- Contact Modal -->
  <ContactModal open={showModal} on:close={closeModal} />
</div>

<style>
  /* Add your about us specific styles here */
</style> 