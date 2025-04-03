<script>
  import { emptyLocalStorage } from '$lib/stores/cart.svelte'; // Import the cart state
  let { data } = $props();
  const orderId = data.props.orderId;
  $effect(() => {
    emptyLocalStorage();
  });
</script>

<div class="flex flex-col items-center justify-center min-h-screen p-4">
  <div class="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
    <h1 class="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
    <p class="text-gray-700 mb-6">Thank you for your purchase. Your order ID is:</p>
    <div class="bg-gray-100 p-4 rounded-lg mb-6">
      <p class="text-gray-900 font-mono">{orderId}</p>
    </div>
    <a href="/shop" class="text-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
      Continue Shopping
    </a>
  </div>
</div>