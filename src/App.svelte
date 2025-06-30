<script>
  import { onMount } from 'svelte';
  import FaQs from "@/FaQs/FaQs.svelte";
  import AboutUs from "@/AboutUs/AboutUs.svelte";
  import Homepage from "@/Homepage/Homepage.svelte";

  const routes = {
    home: Homepage,
    faqs: FaQs,
    about: AboutUs
  };

  let currentRoute = 'home';

  function updateRoute() {
    const hash = window.location.hash.slice(1);
    currentRoute = routes[hash] ? hash : 'home';
  }

  onMount(() => {
    updateRoute();
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  });
</script>

<svelte:component this={routes[currentRoute]} />

<style>
</style>

