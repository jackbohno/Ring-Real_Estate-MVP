<!-- src/lib/Header.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    // local state for mobile menu toggle
    let mobileMenuOpen = false;
  
    // your nav links – update hrefs as you add pages
    const navItems = [
      { label: 'Projects',    href: '/projects' },
      { label: 'Services',    href: '/services' },
      { label: 'Contact',     href: '/#contact' },
      { label: 'Testimonials',href: '/testimonials' },
    ];
  
    // scroll smoothly to the #contact element
    function scrollToContact() {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  </script>
  
  <nav class="fixed top-0 inset-x-0 z-50 bg-transparent backdrop-blur-md py-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        
        <!-- 1. Logo -->
        <a href="/" class="flex-shrink-0">
          <img src="/logo.png" alt="Ring Real Estate" class="h-12 w-auto" />
        </a>
  
        <!-- 2. Desktop nav links -->
        <div class="hidden md:flex md:space-x-8">
          {#each navItems as { label, href }}
            <a
              href={href}
              class="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition"
              on:click={label==='Contact'?scrollToContact:undefined}
            >
              {label}
            </a>
          {/each}
        </div>
  
        <!-- 3. Right-side controls -->
        <div class="flex items-center space-x-4">
  
          <!-- phone only on lg+ -->
          <div class="hidden lg:block text-white text-sm font-medium">
            +21 934 748 392
          </div>
  
          <!-- search icon on md+ -->
          <button
            aria-label="Search"
            class="hidden md:inline-flex p-2 rounded-full hover:bg-white/10 transition"
          >
            <!-- simple magnifying-glass SVG -->
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </button>
  
          <!-- Get a Quote button on md+ -->
          <a
            href="/get-a-quote"
            class="hidden md:inline-flex items-center bg-lime-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-lime-300 transition"
          >
            Get a Quote
            <span class="ml-2 text-lg leading-none">→</span>
          </a>
  
          <!-- mobile menu button on <md -->
          <button
            class="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition"
            aria-label="Toggle menu"
            on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
          >
            {#if mobileMenuOpen}
              <!-- X icon -->
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            {:else}
              <!-- Hamburger icon -->
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            {/if}
          </button>
        </div>
      </div>
    </div>
  
    <!-- 4. Mobile menu panel -->
    {#if mobileMenuOpen}
      <div class="md:hidden bg-white/5 backdrop-blur-sm pb-4">
        <div class="px-2 pt-2 space-y-1">
          {#each navItems as { label, href }}
            <a
              href={href}
              class="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium transition"
              on:click={() => {
                if (label === 'Contact') scrollToContact();
                mobileMenuOpen = false;
              }}
            >
              {label}
            </a>
          {/each}
          <a
            href="/get-a-quote"
            class="block w-full text-center bg-lime-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-lime-300 transition"
            on:click={() => (mobileMenuOpen = false)}
          >
            Get a Quote →
          </a>
        </div>
      </div>
    {/if}
  </nav>
  
  <style>
    /* ensure smooth scroll for all in-page links */
    html { scroll-behavior: smooth; }
  </style>
  