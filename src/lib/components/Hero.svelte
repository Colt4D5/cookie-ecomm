<script lang="ts">
	import Button from "./ui/button/button.svelte";

  const title = "Welcome to Medina's Cocina";
  const subtitle = "Delicious food made with love";
  const backgroundImage = "url('/cookies-hero.jpg')";
  
  // Adding a computed style for background color
  const backgroundColor = "rgba(0, 0, 0, 0.5)";
</script>

<section class="relative bg-cover bg-center h-screen" style="background-image: {backgroundImage}; --background-image: {backgroundImage}; background-color: {backgroundColor};">
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
    <p class="text-lg md:text-2xl mb-8">{subtitle}</p>
    <Button href="/about">
      Get Started
    </Button>
  </div>
</section>

<style>
  section {
    background-image: var(--background-image);
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      background-image: url('/rips/rip1.webp');
      background-repeat: no-repeat;
      aspect-ratio: 2400 / 236;
      height: auto;
      background-size: contain;
      filter: drop-shadow(2px -6px 4px rgba(0, 0, 0, 0.15));
    }
  }
</style>