<script>
  let { title, description, date, url } = $props();
</script>

<a href={url} class="block transition-transform hover:scale-105 h-full">
  <article
    class="rounded-xl border border-gray-700 shadow-md hover:shadow-lg p-6 bg-gray-900 transition-shadow h-full flex flex-col"
  >
    <header class="mb-4">
      <h1 class="text-2xl font-bold text-gray-200 leading-tight mb-2">
        {title}
      </h1>
      <time class="text-gray-300 text-sm">{date}</time>
    </header>

    <p class="text-gray-300 text-base leading-relaxed flex-1">{description}</p>
  </article>
</a>
