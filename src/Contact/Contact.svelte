<script>
  // Import necessary components
  import NavigationProperty1OnWhite from "@/NavigationProperty1OnWhite/NavigationProperty1OnWhite.svelte";
  import Footer from "@/Footer/Footer.svelte";
  import ButtonsProperty1PrimaryButtonSmall from "@/ButtonsProperty1PrimaryButtonSmall/ButtonsProperty1PrimaryButtonSmall.svelte";
  
  let className = "";
  export { className as class };
  
  // Contact form state
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: '',
    budget: ''
  };

  let formError = '';
  let isSubmitting = false;
  let showSuccess = false;

  async function submitForm(event) {
    event.preventDefault();
    
    // Add form validation here
    if (!formData.name || !formData.email || !formData.message) {
      formError = 'Please fill in all required fields';
      return;
    }
    
    formError = '';
    isSubmitting = true;
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      showSuccess = true;
      formData = { name: '', email: '', phone: '', subject: '', message: '', propertyType: '', budget: '' };
    } catch (error) {
      formError = 'Failed to submit. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
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
  <section id="contact-hero" class="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
    <!-- Add your contact hero background image here -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-white mb-6">
          Get In Touch
        </h1>
        <p class="text-lg sm:text-xl text-neutral-white/90 mb-8">
          Ready to start your real estate journey? Contact us today.
        </p>
      </div>
    </div>
  </section>

  <!-- Contact Form & Info Section -->
  <section id="contact-main" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-neutral-neutral-04 mb-8">
            Send Us a Message
          </h2>
          
          {#if showSuccess}
            <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <p class="text-green-700">Thank you! We'll get back to you within 24 hours.</p>
            </div>
          {/if}

          {#if formError}
            <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p class="text-red-700">{formError}</p>
            </div>
          {/if}

          <form on:submit={submitForm} class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium text-neutral-neutral-04 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  bind:value={formData.name}
                  required
                  class="w-full border border-neutral-neutral-03 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-neutral-neutral-04 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  bind:value={formData.email}
                  required
                  class="w-full border border-neutral-neutral-03 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="phone" class="block text-sm font-medium text-neutral-neutral-04 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  bind:value={formData.phone}
                  class="w-full border border-neutral-neutral-03 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label for="property-type" class="block text-sm font-medium text-neutral-neutral-04 mb-2">
                  Property Type
                </label>
                <select
                  id="property-type"
                  bind:value={formData.propertyType}
                  class="w-full border border-neutral-neutral-03 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent"
                >
                  <option value="">Select property type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-neutral-neutral-04 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                bind:value={formData.subject}
                class="w-full border border-neutral-neutral-03 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent"
                placeholder="What can we help you with?"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-neutral-neutral-04 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="6"
                class="w-full border border-neutral-neutral-03 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent resize-none"
                placeholder="Tell us about your real estate needs..."
              ></textarea>
            </div>

            <div>
              <ButtonsProperty1PrimaryButtonSmall
                property1="primary-button-small"
                text={isSubmitting ? "Sending..." : "Send Message"}
                class="bg-theme-colors-color-02 {isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-neutral-neutral-04 mb-8">
            Contact Information
          </h2>
          
          <div class="space-y-8">
            <!-- Office Info -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Our Office</h3>
              <div class="space-y-3 text-neutral-neutral-03">
                <p>140 Shepherds Hill Rd, Bellevue Heights</p>
                <p>5050, South Australia</p>
                <p>Phone: (907) 357-4333</p>
                <p>Email: hello@homequest.com</p>
              </div>
            </div>

            <!-- Business Hours -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Business Hours</h3>
              <div class="space-y-2 text-neutral-neutral-03">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div>
              <h3 class="text-xl font-semibold text-neutral-neutral-04 mb-4">Emergency Contact</h3>
              <p class="text-neutral-neutral-03">
                For urgent matters outside business hours:<br />
                Emergency Line: (907) 357-4334
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section id="map" class="py-16 sm:py-20 lg:py-24 bg-neutral-neutral-01">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Find Us
      </h2>
      <div class="bg-neutral-white rounded-2xl p-6 shadow-lg">
        <!-- Add your map component/iframe here -->
        <div class="h-96 bg-neutral-neutral-01 rounded-lg flex items-center justify-center">
          <p class="text-neutral-neutral-03">Interactive map will be embedded here</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Quick Links -->
  <section id="quick-help" class="py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-neutral-neutral-04 mb-12">
        Quick Help
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Add quick help cards here -->
        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <h3 class="text-lg font-semibold text-neutral-neutral-04 mb-3">Frequently Asked Questions</h3>
          <p class="text-neutral-neutral-03 mb-4">Find answers to common questions</p>
          <!-- Add link to FAQ page -->
        </div>
        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <h3 class="text-lg font-semibold text-neutral-neutral-04 mb-3">Property Valuation</h3>
          <p class="text-neutral-neutral-03 mb-4">Get an estimate for your property</p>
          <!-- Add link to valuation tool -->
        </div>
        <div class="bg-neutral-white rounded-2xl p-6 shadow-lg border border-neutral-neutral-01">
          <h3 class="text-lg font-semibold text-neutral-neutral-04 mb-3">Schedule Viewing</h3>
          <p class="text-neutral-neutral-03 mb-4">Book a property viewing online</p>
          <!-- Add link to scheduling tool -->
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer class="w-full" />
</div>

<style>
  /* Add your contact page specific styles here */
</style> 