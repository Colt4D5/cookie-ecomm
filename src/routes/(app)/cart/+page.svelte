<script lang="ts">
  import { loadStripe } from '@stripe/stripe-js';
  import { PUBLIC_STRIPE_KEY } from '$env/static/public';

	import { Button } from '$lib/components/ui/button';
	import { cart, decreaseQuantity, removeItem } from '$lib/stores/cart.svelte';

	function goBack() {
		// Handle go back logic
		console.log('Going back...');
	}

  async function checkOut(e: SubmitEvent) {
    e.preventDefault();

    // Handle checkout logic
    const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: cart.items.map(item => ({ priceId: item.priceId, quantity: item.quantity })),
        mode: 'payment'
      })
    });
    const data = await response.json();
    // console.log('Checking out...');
    console.log(data);

    stripe?.redirectToCheckout({
      sessionId: data.sessionId
    });
  }

	let subtotal = $derived(cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
	let total = $derived(subtotal);
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Your Cart</h1>
  <form method="POST" onsubmit={checkOut}>
    <div class="space-y-4">
      {#each cart.items as item}
        <div class="flex items-center border p-4 rounded-lg shadow-md">
          <input type="hidden" name={`item_${item.priceId}`} value={`${item.priceId}|${item.quantity}`}>
          <img src={item.image} alt={item.name} class="w-24 h-24 object-cover mr-4">
          <div class="flex-1">
            <h2 class="text-xl font-semibold">{item.name}</h2>
            <p class="text-gray-600">{item.description}</p>
            <p class="text-gray-600">Price: ${item.price}</p>
            <!-- <p class="text-gray-600">Price ID: {item.priceId}</p> -->
            <p class="text-gray-600">Quantity: {item.quantity}</p>
            <p class="text-gray-800 font-bold">Total: ${item.price * item.quantity}</p>
            <Button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onclick={() => removeItem(item)}>Remove</Button>
            <Button class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600" onclick={() => decreaseQuantity(item)}>Decrease Quantity</Button>
          </div>
        </div>
      {/each}
    </div>
    <div class="mt-6">
      <p class="text-xl">Subtotal: ${subtotal.toFixed(2)}</p>
      <p class="text-xl">Total (including shipping): ${total.toFixed(2)}</p>
    </div>
    <div class="mt-6 flex justify-between">
      <Button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Purchase</Button>
      <Button type="button" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onclick={goBack}>Go Back</Button>
    </div>
  </form>
</div>