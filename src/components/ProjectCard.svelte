<script lang="ts">
  let {
    title,
    description,
    url,
    tags,
  }: {
    title: string;
    description: string;
    url: string;
    tags: string[];
  } = $props();
</script>

<a href={url} class="block transition-transform hover:scale-105 h-full">
  <article
    class="rounded-xl border border-gray-600 shadow-md hover:shadow-lg p-5 bg-gray-900 transition-shadow h-full flex flex-col"
  >
    <header class="mb-4">
      <h1 class="text-2xl font-bold text-gray-200 leading-tight mb-2">
        {title}
      </h1>
    </header>

    <p class="text-gray-200 text-base leading-relaxed flex-1">{description}</p>
    <div class="flex flex-row flex-wrap gap-2 mt-4 overflow-hidden">
      {#each tags as tag}
        <div
          class="rounded-sm bg-amber-600 text-white font-medium px-2 py-1 text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-32"
        >
          {tag}
        </div>
      {/each}
    </div>
  </article>
</a>
