<script lang="ts">
  import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
  import { cart, addItem } from '$lib/stores/cart.svelte';
  import { items } from '$lib/stores/cookies.svelte';
  
  let { data } = $props();
  let { products } = $derived(data);

  let filter = $state('');
  
  // New derived store to filter products based on a criteria (e.g., name)
  let filteredProducts = $derived.by(() => {
    return products?.filter(product => product.name.toLowerCase().includes(filter.toLowerCase())) || [];
  });
</script>
  
<div class="relative bg-cover bg-center h-96 mb-12" style="background-image: url('/cookies-hero.jpg');">
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Medina's Cocina</h1>
    <p class="text-lg md:text-2xl mb-8">Delicious food made with love</p>
    <Button onclick={() => goto('/about')}>Get Started</Button>
  </div>
</div>

<section class="container mx-auto p-4">
  <h1 class="text-4xl font-bold text-center mb-4">Shop</h1>
  <input type="text" bind:value={filter} placeholder="Filter cookies..." class="mb-4 p-2 border rounded w-full" />

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each filteredProducts as product}
      <div class="p-4 text-center">
        <Card.Root>
          <Card.Header>
            <Card.Title class="text-xl">{product.name}</Card.Title>
            <!-- <Card.Description>Card Description</Card.Description> -->
          </Card.Header>
          <Card.Content>
            <img src={product.image} alt={product.name} class="w-full h-auto mb-2" />
            <p>{product.description}</p>
            <Button onclick={() => addItem(product)} >Add to Cart</Button>
            <p class="text-lg mb-2 text-right">${product.price.toFixed(2)}</p>
          </Card.Content>
        </Card.Root>
      </div>
    {/each}
  </div>
</section>
