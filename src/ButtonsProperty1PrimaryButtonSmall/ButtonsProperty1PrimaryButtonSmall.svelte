<script>
  import Arrow from "@/Arrow/Arrow.svelte";
  import { createEventDispatcher } from "svelte";
  import NavigationProperty1OnWhite from "@/NavigationProperty1OnWhite/NavigationProperty1OnWhite.svelte";

  export let text = "Get a Quote";
  export let property1 = "primary-button-large";
  export let href = ""; // optional URL – if provided renders an <a>

  let className = "";
  export { className as class };
  const variantsClassName = "property-1-" + property1;

  const dispatch = createEventDispatcher();

  function handleClick(event) {
    dispatch("click", event);
  }
</script>

{#if href}
  <a
    class={'bg-theme-colors-color-02 rounded-[32px] pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-3 items-center justify-center relative ' + className + ' ' + variantsClassName}
    href={href}
  >
    <span
      class="text-neutral-white text-left font-body-16px-medium-font-family text-body-16px-medium-font-size leading-body-16px-medium-line-height font-body-16px-medium-font-weight relative"
      style="letter-spacing: var(--body-16px-medium-letter-spacing, -0.2px)"
    >
      {text}
    </span>
    <Arrow class="!shrink-0"></Arrow>
  </a>
{:else}
  <button
    type="button"
    class={'bg-theme-colors-color-02 rounded-[32px] pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-3 items-center justify-center relative ' + className + ' ' + variantsClassName}
    on:click={handleClick}
  >
    <span
      class="text-neutral-white text-left font-body-16px-medium-font-family text-body-16px-medium-font-size leading-body-16px-medium-line-height font-body-16px-medium-font-weight relative"
      style="letter-spacing: var(--body-16px-medium-letter-spacing, -0.2px)"
    >
      {text}
    </span>
    <Arrow class="!shrink-0"></Arrow>
  </button>
{/if}

<style></style>
