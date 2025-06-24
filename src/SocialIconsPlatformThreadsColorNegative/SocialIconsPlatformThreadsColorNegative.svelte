<script>
  export let platform = "messenger";
  export let color = "negative";
  let className = "";
  export { className as class };
  const variantsClassName = "platform-" + platform + " color-" + color;
</script>

<img
  class={'shrink-0 w-5 h-5 relative overflow-visible ' + className + ' ' + variantsClassName}
  src="/social-icons-platform-threads-color-negative.svg"
  alt="Threads"
/>

<style></style>
