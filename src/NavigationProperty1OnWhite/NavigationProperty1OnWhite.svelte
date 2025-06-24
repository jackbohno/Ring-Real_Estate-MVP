<script>
  import LogoProperty1Variant2 from "@/LogoProperty1Variant2/LogoProperty1Variant2.svelte";
  import ButtonsProperty1PrimaryButtonSmall from "@/ButtonsProperty1PrimaryButtonSmall/ButtonsProperty1PrimaryButtonSmall.svelte";
  export let property1 = "on-dark";
  let className = "";
  export { className as class };
  const variantsClassName = "property-1-" + property1;

  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<div class={'relative ' + className + ' ' + variantsClassName}>
  <!-- Desktop Navigation -->
  <div class="hidden lg:flex h-[61px] relative items-center justify-between px-4 sm:px-6 lg:px-8">
    <!-- Left side - Logo -->
    <LogoProperty1Variant2 class="shrink-0"></LogoProperty1Variant2>
    
    <!-- Center - Contact Link -->
    <div class="flex items-center">
      <button
        type="button"
        class="text-neutral-white text-left font-['Geist-Regular',_sans-serif] text-base leading-[180%] font-normal relative hover:opacity-80 transition-opacity cursor-pointer"
        style="letter-spacing: -0.2px;"
        on:click={scrollToContact}
        on:keydown={(e) => e.key === 'Enter' && scrollToContact()}
      >
        Contact
      </button>
    </div>
    
    <!-- Right side - Phone & Button -->
    <div class="flex items-center gap-6">
      <div class="text-neutral-white text-left font-['Geist-Regular',_sans-serif] text-base leading-[180%] font-normal relative hidden xl:block" style="letter-spacing: -0.2px;">
        +21 934 748 392
      </div>
      <ButtonsProperty1PrimaryButtonSmall
        property1="primary-button-small"
        class="bg-theme-colors-color-01 shrink-0"
      ></ButtonsProperty1PrimaryButtonSmall>
    </div>
  </div>

  <!-- Mobile Navigation -->
  <div class="lg:hidden flex h-[61px] relative items-center justify-between px-4 sm:px-6">
    <!-- Left side - Logo -->
    <LogoProperty1Variant2 class="shrink-0"></LogoProperty1Variant2>
    
    <!-- Right side - Contact Link & Button -->
    <div class="flex items-center gap-4">
      <button
        type="button"
        class="text-neutral-white text-left font-['Geist-Regular',_sans-serif] text-sm sm:text-base leading-[180%] font-normal relative hover:opacity-80 transition-opacity cursor-pointer"
        style="letter-spacing: -0.2px;"
        on:click={scrollToContact}
        on:keydown={(e) => e.key === 'Enter' && scrollToContact()}
      >
        Contact
      </button>
      <ButtonsProperty1PrimaryButtonSmall
        property1="primary-button-small"
        class="bg-theme-colors-color-01 shrink-0"
      ></ButtonsProperty1PrimaryButtonSmall>
    </div>
  </div>
</div>
