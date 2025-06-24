<script>
  // Import necessary components
  import NavigationProperty1OnWhite from "@/NavigationProperty1OnWhite/NavigationProperty1OnWhite.svelte";
  import Footer from "@/Footer/Footer.svelte";
  import ContactModal from "@/ContactModal.svelte";
  import ButtonsProperty1PrimaryButtonSmall from "@/ButtonsProperty1PrimaryButtonSmall/ButtonsProperty1PrimaryButtonSmall.svelte";
  
  let className = "";
  export { className as class };
  
  let showModal = false;
  const openModal = () => (showModal = true);
  const closeModal = () => (showModal = false);

  // Services data structure
  let services = [
    // Add your services data here
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
  <section id="services-hero" class="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
    <!-- Add your services hero background image here -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-white mb-6">
          Our Real Estate Services
        </h1>
        <p class="text-lg sm:text-xl text-neutral-white/90 mb-8">
          Comprehensive real estate solutions tailored to your needs
        </p>
      </div>
    </div>
  </section>

  <!-- Services Overview Section -->
  <section id="services-overview" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-neutral-neutral-04 mb-6">
          What We Offer
        </h2>
        <p class="text-lg text-neutral-neutral-03 max-w-3xl mx-auto">
          From buying and selling to property management and investment advice, 
          we provide complete real estate solutions.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Add service cards here -->
        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Property Buying</h3>
          <!-- Add service description -->
        </div>
        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Property Selling</h3>
          <!-- Add service description -->
        </div>
        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Property Management</h3>
          <!-- Add service description -->
        </div>
      </div>
    </div>
  </section>

  <!-- Detailed Services Section -->
  <section id="detailed-services" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Buying Services -->
      <div class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-neutral-04 mb-6">
              Buying Services
            </h2>
            <!-- Add buying services content here -->
            <ul class="space-y-3 text-neutral-neutral-03">
              <li>• Property search and selection</li>
              <li>• Market analysis and pricing</li>
              <li>• Financing assistance</li>
              <li>• Negotiation support</li>
              <li>• Closing coordination</li>
            </ul>
          </div>
          <div>
            <!-- Add buying services image here -->
          </div>
        </div>
      </div>

      <!-- Selling Services -->
      <div class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="lg:order-2">
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-neutral-04 mb-6">
              Selling Services
            </h2>
            <!-- Add selling services content here -->
            <ul class="space-y-3 text-neutral-neutral-03">
              <li>• Property valuation</li>
              <li>• Marketing and listing</li>
              <li>• Professional photography</li>
              <li>• Buyer screening</li>
              <li>• Transaction management</li>
            </ul>
          </div>
          <div class="lg:order-1">
            <!-- Add selling services image here -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Investment Services Section -->
  <section id="investment-services" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Investment & Commercial Services
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Add investment service cards here -->
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section id="our-process" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Our Process
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Add process steps here -->
        <div class="text-center">
          <div class="bg-theme-colors-color-01 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl font-bold text-neutral-neutral-04">1</span>
          </div>
          <h3 class="text-lg font-semibold text-neutral-neutral-04 mb-2">Consultation</h3>
          <!-- Add step description -->
        </div>
        <!-- Repeat for steps 2, 3, 4 -->
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section id="pricing" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Service Packages
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Add pricing cards here -->
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="services-cta" class="py-16 sm:py-20 lg:py-24 bg-theme-colors-color-02">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-neutral-white mb-6">
        Ready to Get Started?
      </h2>
      <p class="text-lg text-neutral-white/90 mb-8">
        Contact us today to discuss your real estate needs and choose the right service package.
      </p>
      <ButtonsProperty1PrimaryButtonSmall
        property1="primary-button-small"
        text="Get a Quote"
        class="bg-theme-colors-color-01"
        on:click={openModal}
      />
    </div>
  </section>

  <!-- Footer -->
  <Footer class="w-full" />

  <!-- Contact Modal -->
  <ContactModal open={showModal} on:close={closeModal} />
</div>

<style>
  /* Add your services page specific styles here */
</style> 