<script>
  import { onMount } from "svelte";
  import { Linkedin, Github } from "@lucide/svelte";

  const text = "Pathfinder";
  let displayText = $state("");

  onMount(() => {
    let i = 0;

    function typeEffect() {
      if (i < text.length) {
        displayText += text.charAt(i);
        i++;
        setTimeout(typeEffect, 150);
      }
    }

    typeEffect();
  });
</script>

<div
  class={`flex flex-col items-center shadow-lg 
  justify-center p-16 border-2 border-gray-800 
  bg-gradient-to-br from-slate-950 via-indigo-950 
  to-slate-950 rounded-2xl transition ease-in-out hover:scale-101`}
>
  <div class="text-center">
    <h1 class="text-6xl md:text-9xl font-bold mb-8 font-serif tracking-tight">
      <span
        class="bg-gradient-to-r from-indigo-400 via-sky-500 to-indigo-400 bg-clip-text px-2 text-transparent"
        >{displayText}</span
      >
    </h1>
    <p class="text-lg md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
      Welcome to my digital space where I share insights on geophysics, software
      development, and creative projects.
    </p>
    <div
      class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
    >
      <a
        class={`px-8 py-4 
        bg-emerald-500 cursor-pointer hover:bg-emerald-600 rounded-lg 
        font-semibold text-lg transition-colors duration-200`}
        href="/projects"
        target="_blank"
      >
        View My Work
      </a>
      <a
        class={`px-8 py-4 dark:text-gray-900 border-2 cursor-pointer bg-gray-100 
        hover:bg-gray-300 hover:text-slate-900 rounded-lg font-semibold text-lg 
        transition-colors duration-200`}
        href="/blog"
        target="_blank"
      >
        Read Blog Posts
      </a>
    </div>

    <div class="flex justify-center space-x-6 text-gray-400">
      <a
        href="https://www.linkedin.com/in/andre-albano/"
        class="hover:text-white transition-colors duration-200"
      >
        <Linkedin
          size={40}
          absoluteStrokeWidth
          color="white"
          class="text-gray-400 hover:text-white transition hover:scale-105"
        />
      </a>
      <a
        href="https://github.com/albano-a/"
        class="hover:text-white transition-colors duration-200"
      >
        <Github
          size={40}
          absoluteStrokeWidth
          color="white"
          class="text-gray-400 hover:text-white transition hover:scale-105"
        />
      </a>
    </div>
  </div>
</div>
