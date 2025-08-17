<script>
  import katex from "katex";
  import "katex/dist/katex.css";

  let { f = "", centered = false } = $props();

  const html = $derived(katex.renderToString(`${f}`, { throwOnError: false }));
</script>

{#if centered == true}
  <div class="not-prose container text-center text-2xl my-4">
    <span class="">{@html html}</span>
  </div>
{:else if centered == false}
  <span class="not-prose text-lg">{@html html}</span>
{/if}
