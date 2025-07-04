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
  <!-- Desktop nav: hidden below “lg” screens -->
  <div class="hidden lg:flex h-[61px] items-center justify-between px-4 sm:px-6 lg:px-8">
    <!-- Logo on the left -->
    <LogoProperty1Variant2 class="shrink-0" />

    <!-- “Contact” link in the center -->
    <button
      class="text-neutral-white text-base font-normal hover:opacity-80 transition-opacity"
      style="letter-spacing: -0.2px;"
      on:click={scrollToContact}
      on:keydown={(e) => e.key === 'Enter' && scrollToContact()}
    >
      Contact
    </button>

    <!-- Phone number + primary button on the right -->
    <div class="flex items-center gap-6">
      <!-- Phone number only shows at xl+ -->
      <div class="hidden xl:block text-neutral-white text-base font-normal">
        +21 934 748 392
      </div>
      <ButtonsProperty1PrimaryButtonSmall
        property1="primary-button-small"
        class="bg-theme-colors-color-01 shrink-0"
      />
    </div>
  </div>

  <!-- Mobile nav: visible below “lg” screens -->
  <div class="lg:hidden flex h-[61px] items-center justify-between px-4 sm:px-6">
    <LogoProperty1Variant2 class="shrink-0" />
    <div class="flex items-center gap-4">
      <button
        class="text-neutral-white text-sm sm:text-base font-normal hover:opacity-80 transition-opacity"
        style="letter-spacing: -0.2px;"
        on:click={scrollToContact}
        on:keydown={(e) => e.key === 'Enter' && scrollToContact()}
      >
        Contact
      </button>
      <ButtonsProperty1PrimaryButtonSmall
        property1="primary-button-small"
        class="bg-theme-colors-color-01 shrink-0"
      />
    </div>
  </div>
</div>
