import { clearCart } from "$lib/stores/cart.svelte";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ url }) => {
  const orderId = url.searchParams.get("session_id");
  
  clearCart();

  return {
    props: {
      orderId
    }
  };
};