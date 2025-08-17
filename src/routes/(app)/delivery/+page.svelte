<script>
  import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

  let deliveryInstructions = $state("Your cookie boxes will be delivered between 9 AM and 5 PM. Please ensure someone is available to receive the delivery.");
</script>

<div class="relative bg-cover bg-center h-96 mb-12" style="background-image: url('/cookies-hero.jpg');">
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Medina's Cocina</h1>
    <p class="text-lg md:text-2xl mb-8">Delicious food made with love</p>
    <Button onclick={() => goto('/about')}>Get Started</Button>
  </div>
</div>

<div class="container mx-auto p-4">
  <h1 class="text-2xl md:text-4xl font-bold mb-4 text-center">Delivery Instructions</h1>
  <p class="text-base md:text-lg text-center">
    {deliveryInstructions}
  </p>
</div>

<style>
  .container {
    max-width: 800px;
  }
</style>