<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  export let open = false;
  const dispatch = createEventDispatcher();
  
  let modalRef;
  let lastFocusedElement;
  let formError = '';
  let isSubmitting = false;

  function close() {
    dispatch('close');
  }

  async function submit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    
    // Validation
    if (!name || name.length < 2) {
      formError = 'Please enter a valid name (at least 2 characters)';
      return;
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formError = 'Please enter a valid email address';
      return;
    }
    
    formError = '';
    isSubmitting = true;
    
    try {
      // Here you could call a backend endpoint or email service
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      alert('Thank you – we will contact you shortly.');
      close();
    } catch (error) {
      formError = 'Failed to submit. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }

  // Handle backdrop click
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      close();
    }
  }

  // Handle escape key - we'll use a different approach
  function handleEscape(event) {
    if (event.key === 'Escape') {
      close();
    }
  }

  // Add focus management lifecycle functions
  onMount(() => {
    document.addEventListener('keydown', handleEscape);
  });

  onDestroy(() => {
    document.removeEventListener('keydown', handleEscape);
  });

  $: if (open) {
    lastFocusedElement = document.activeElement;
    setTimeout(() => {
      modalRef?.querySelector('input')?.focus();
    }, 0);
  } else if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
</script>

{#if open}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black bg-opacity-60 z-50"
    role="presentation"
    aria-hidden="true"
    on:click={handleBackdropClick}
  ></div>

  <!-- Modal Dialog -->
  <div
    bind:this={modalRef}
    class="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <div 
      class="bg-white rounded-xl w-full max-w-md p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 shadow-lg max-h-[90vh] overflow-y-auto pointer-events-auto" 
      role="document"
      tabindex="-1"
    >
      <form on:submit={submit} class="space-y-4 sm:space-y-6">
        <h2 id="modal-title" class="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Request a Quote</h2>
        <p id="modal-description" class="sr-only">Contact form for requesting a property quote</p>

        {#if formError}
          <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <p class="text-red-700">{formError}</p>
          </div>
        {/if}

        <label for="name" class="block">
          <span class="block text-sm sm:text-base mb-1 sm:mb-2 font-medium">Name</span>
          <input
            id="name"
            name="name"
            type="text"
            required
            class="w-full border border-gray-200 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent text-base"
            placeholder="Enter your full name"
            aria-required="true"
          />
        </label>

        <label for="email" class="block">
          <span class="block text-sm sm:text-base mb-1 sm:mb-2 font-medium">Email</span>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="w-full border border-gray-200 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent text-base"
            placeholder="Enter your email address"
            aria-required="true"
          />
        </label>

        <label for="message" class="block">
          <span class="block text-sm sm:text-base mb-1 sm:mb-2 font-medium">Message</span>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="w-full border border-gray-200 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-theme-colors-color-02 focus:border-transparent text-base resize-none"
            placeholder="Tell us about your property needs..."
            aria-describedby="message-help"
          ></textarea>
          <div id="message-help" class="sr-only">Optional message describing your property needs</div>
        </label>

        <div class="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-2 sm:pt-4">
          <button
            type="button"
            class="btn-responsive border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px] px-4 sm:px-6"
            on:click={close}
            aria-label="Cancel and close modal"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn-responsive bg-theme-colors-color-01 rounded-lg hover:opacity-90 transition-opacity min-h-[44px] px-4 sm:px-6 {isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}"
            aria-label="Submit contact form"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

<style>
  /* Ensure modal is accessible and mobile-friendly */
  @media (max-width: 640px) {
    .btn-responsive {
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
  
  @media (min-width: 641px) {
    .btn-responsive {
      padding: 0.875rem 1.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  /* Touch-friendly improvements */
  @media (hover: none) and (pointer: coarse) {
    button {
      min-height: 44px;
      min-width: 44px;
    }
    
    input, textarea {
      min-height: 44px;
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
</style> 