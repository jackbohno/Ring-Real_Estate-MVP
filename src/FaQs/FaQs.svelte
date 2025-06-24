<script>
  import NavigationProperty1OnWhite from "@/NavigationProperty1OnWhite/NavigationProperty1OnWhite.svelte";
  import ArrowUp01Sharp from "@/ArrowUp01Sharp/ArrowUp01Sharp.svelte";
  import ArrowDown01Sharp from "@/ArrowDown01Sharp/ArrowDown01Sharp.svelte";
  import ButtonsProperty1PrimaryButtonSmall from "@/ButtonsProperty1PrimaryButtonSmall/ButtonsProperty1PrimaryButtonSmall.svelte";
  import Footer from "@/Footer/Footer.svelte";
  import ContactModal from "@/ContactModal.svelte";
  
  let className = "";
  export { className as class };

  let faqs = [
    {
      q: "How long does it take to buy or sell a property?",
      a: "The time it takes to buy or sell a property depends on several factors, including market conditions, property type, and the buyer's/seller's readiness. On average, it takes 1 to 3 months from listing a property to closing a sale.",
      open: false           // start closed
    },
    {
      q: "What fees are involved in buying or selling a home?",
      a: "Typical fees include real estate agent commissions (5-6% of sale price), closing costs (2-5% of purchase price), title insurance, appraisal fees, and transfer taxes. We provide transparent pricing with no hidden fees.",
      open: false
    },
    {
      q: "How is the value of my home determined?",
      a: "Home values are determined through comparative market analysis (CMA), recent sales of similar properties in your area, current market conditions, property condition, and location factors. We use professional appraisals and market data for accurate valuations.",
      open: false
    },
    {
      q: "Can I get assistance with financing a property purchase?",
      a: "Yes, we work with trusted mortgage lenders and can help you understand different financing options, including conventional loans, FHA loans, VA loans, and first-time buyer programs. We'll guide you through the pre-approval process.",
      open: false
    },
    {
      q: "What are the benefits of hiring a property management service?",
      a: "Property management services handle tenant screening, rent collection, maintenance coordination, legal compliance, and property marketing. This saves you time, reduces stress, and often increases rental income through professional management.",
      open: false
    },
    {
      q: "How do I schedule a property viewing?",
      a: "You can schedule a viewing by calling us at +21 934 748 392, emailing hello@homequest.com, or using our online booking system. We offer flexible viewing times including evenings and weekends to accommodate your schedule.",
      open: false
    },
    {
      q: "What services do you offer for first-time buyers?",
      a: "We offer comprehensive first-time buyer services including education programs, down payment assistance guidance, credit counseling, pre-approval help, and dedicated support throughout the entire buying process.",
      open: false
    }
  ];

  let showModal = false;
  const openModal = () => (showModal = true);
  const closeModal = () => (showModal = false);

  function toggle(i) {
    faqs[i].open = !faqs[i].open;   // Svelte reactivity will update UI
  }
</script>

<div
  class={'bg-neutral-white min-h-screen relative overflow-x-hidden ' + className}
>
  <!-- Sticky Navigation Header -->
  <div class="sticky top-0 z-50 bg-theme-colors-color-02/95 backdrop-blur-sm border-b border-theme-colors-color-02/20 shadow-sm">
    <NavigationProperty1OnWhite
      property1="on-dark"
      class="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
    />
  </div>

  <!-- Hero Section -->
  <div id="projects" class="relative w-full h-[300px] sm:h-[400px] md:h-[453px] lg:h-[500px] xl:h-[600px]">
    <img
      class="w-full h-full object-cover"
      style="
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        );
      "
      src="/image0.png"
      alt="FAQs page header background"
    />
    <div
      class="text-neutral-white text-center font-headline-display-h1-font-family text-headline-display-h1-font-size leading-headline-display-h1-line-height font-headline-display-h1-font-weight absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[920px] px-4"
      style="
        letter-spacing: var(--headline-display-h1-letter-spacing, -3.5px);
      "
    >
      FAQs
    </div>
  </div>

  <!-- Main Content Container -->
  <div id="services" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
      
      <!-- Left Column - FAQ Questions -->
      <div class="space-y-4 sm:space-y-6">
        <div class="flex flex-col gap-3 sm:gap-4 items-start justify-start">
          <div
            class="text-neutral-neutral-04 text-left font-headline-h2-font-family text-headline-h2-font-size leading-headline-h2-line-height font-headline-h2-font-weight relative w-full"
            style="letter-spacing: var(--headline-h2-letter-spacing, -1.8px)"
          >
            Have Any Questions?
          </div>
          <div
            class="text-neutral-neutral-03 text-left font-body-16px-regular-font-family text-body-16px-regular-font-size leading-body-16px-regular-line-height font-body-16px-regular-font-weight relative w-full"
            style="
              letter-spacing: var(--body-16px-regular-letter-spacing, -0.4px);
            "
          >
            The time it takes to buy or sell a property depends on several
            factors, including market conditions, property type, and the
            buyer's/seller's readiness. On average, it takes 1 to 3
            months from listing a property to closing a sale.
          </div>
        </div>
      </div>

      <!-- Right Column - FAQ Accordion -->
      <div class="space-y-3 sm:space-y-4" role="region" aria-label="Frequently Asked Questions">
        {#each faqs as faq, i}
          <section class="bg-neutral-neutral-01 rounded-2xl p-4 sm:p-6 transition-all duration-200 hover:shadow-sm">
            <header class="flex justify-between items-start gap-3 sm:gap-4">
              <button
                type="button"
                id={`faq-question-${i}`}
                class="flex-1 pr-3 sm:pr-4 text-left font-body-18px-medium-font-family text-neutral-neutral-04 cursor-pointer hover:opacity-80 transition-opacity min-h-[44px] flex items-center"
                on:click={() => toggle(i)}
                on:keydown={(e) => e.key === 'Enter' && toggle(i)}
                aria-expanded={faq.open}
                aria-controls={`faq-content-${i}`}
                aria-describedby={`faq-status-${i}`}
              >
                {faq.q}
              </button>

              <button
                type="button"
                class="shrink-0 p-2 -m-2 touch-manipulation"
                on:click={() => toggle(i)}
                on:keydown={(e) => e.key === 'Enter' && toggle(i)}
                aria-label={faq.open ? 'Close answer' : 'Open answer'}
                aria-expanded={faq.open}
                aria-controls={`faq-content-${i}`}
              >
                {#if faq.open}
                  <ArrowUp01Sharp class="shrink-0" aria-hidden="true" />
                {:else}
                  <ArrowDown01Sharp class="shrink-0" aria-hidden="true" />
                {/if}
              </button>
            </header>

            <div 
              id={`faq-status-${i}`}
              class="sr-only"
              aria-live="polite"
            >
              {faq.open ? 'Answer expanded' : 'Answer collapsed'}
            </div>

            {#if faq.open}
              <div 
                id={`faq-content-${i}`}
                class="mt-4 pr-3 sm:pr-4 text-neutral-neutral-03 animate-fadeIn"
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <p class="text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            {/if}
          </section>
        {/each}
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div id="contact" class="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[690px] mt-12 sm:mt-16">
    <img
      class="w-full h-full object-cover rounded-t-3xl"
      style="
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        );
      "
      src="/image1.png"
      alt="Contact section background"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          class="text-neutral-white text-center font-headline-display-h1-font-family text-headline-display-h1-font-size leading-headline-display-h1-line-height font-headline-display-h1-font-weight relative mb-6 sm:mb-8"
          style="
            letter-spacing: var(--headline-display-h1-letter-spacing, -3.5px);
          "
        >
          Ready to Make a
          <br />
          Move? Contact Us Now!
        </div>
        <div
          class="text-neutral-white text-center font-body-20px-regular-font-family text-body-20px-regular-font-size leading-body-20px-regular-line-height font-body-20px-regular-font-weight relative mb-6 sm:mb-8 max-w-3xl mx-auto"
          style="
            letter-spacing: var(--body-20px-regular-letter-spacing, -0.8px);
            opacity: 0.8;
          "
        >
          Contact us today to discuss your property needs and choose the right
          plan. We're here to guide you through every step of the process.
        </div>
        <ButtonsProperty1PrimaryButtonSmall
          property1="primary-button-small"
          class="bg-theme-colors-color-01"
          on:click={openModal}
        ></ButtonsProperty1PrimaryButtonSmall>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <Footer class="w-full" />

  <!-- Contact Modal -->
  <ContactModal open={showModal} on:close={closeModal} />
</div>

<style>
  /* Custom responsive utilities */
  @media (max-width: 640px) {
    .text-headline-display-h1-font-size {
      font-size: 2rem;
      line-height: 1.2;
    }
  }
  
  @media (min-width: 641px) and (max-width: 1024px) {
    .text-headline-display-h1-font-size {
      font-size: 3rem;
      line-height: 1.1;
    }
  }

  /* Animation for FAQ content */
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Touch-friendly improvements */
  @media (hover: none) and (pointer: coarse) {
    button {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* Screen reader only content */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Sticky header transitions */
  .sticky {
    transition: all 0.3s ease-in-out;
  }
</style>
