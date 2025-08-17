<script>
  let { activeRoute = "" } = $props();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];
</script>

<header
  class="bg-white dark:bg-gray-950 border-2 border-gray-900 top-16 z-50 mx-16 rounded-lg"
>
  <nav class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
    <a href="/" class="text-2xl font-bold text-gray-200 no-underline"
      >Pathfinder</a
    >

    <ul class="flex list-none m-0 p-0 gap-8">
      {#each navItems as item}
        <li>
          <a
            href={item.href}
            class="text-gray-300 no-underline font-bold transition-colors duration-200 hover:text-indigo-600 {activeRoute ===
            item.href
              ? 'text-indigo-950'
              : ''}"
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
