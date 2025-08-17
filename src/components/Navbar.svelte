<script>
  let { activeRoute = "" } = $props();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="bg-white dark:bg-gray-950 top-16 z-50 mx-4 md:mx-16 rounded-lg">
  <nav
    class="flex justify-between items-center px-4 md:px-8 py-4 md:max-w-6xl max-w-5xl mx-auto"
  >
    <a href="/" class="text-2xl font-bold text-gray-200 no-underline">
      Pathfinder
    </a>

    <!-- Navigation menu -->
    <ul class="flex list-none m-0 p-0 gap-4 md:gap-8">
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
