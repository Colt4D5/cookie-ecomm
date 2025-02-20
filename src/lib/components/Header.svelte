<script lang="ts">
  import { LogIn, ShoppingCart, UserRound, Minus, Plus } from 'lucide-svelte';
	import * as Sheet from './ui/sheet';
	import * as Avatar from './ui/avatar';
	import { Button } from './ui/button';
	import { goto } from '$app/navigation';
	import * as DropdownMenu from './ui/dropdown-menu';
	import { cart, calculateTotal, removeItem, decreaseQuantity } from '$lib/stores/cart.svelte';

  const { user } = $props();
  let headerElement: HTMLElement | null = $state(null);
	let headerHeight: number = $derived.by(() => Math.floor(headerElement?.getBoundingClientRect()?.height || 0));
  
  let cartVisible = $state(false);
  let shipping = $state(0);
  let isFixed = $state(false);
  let scrollY = $state(0);

  // Function to get the total items in the cart
  function getTotalItems() {
    return cart.items.reduce((total, item) => total + (item.quantity ?? 0), 0);
  }

  function decrementQuantity(item: Cart) {
    if (item.quantity && item.quantity > 1) {
      decreaseQuantity(item.id);
    } else {
      removeItem(item.id);
    }
  }

  $effect(() => {
      isFixed = scrollY > 500;
  });
</script>

<svelte:window bind:scrollY={scrollY} />

{#if isFixed}
	<div class={`h-[${headerHeight}px]`}></div>
{/if}

<header bind:this={headerElement} class={`${isFixed ? 'fixed top-0 w-full z-50' : 'relative'} flex flex-wrap items-center justify-between px-8 py-4 bg-white shadow-md`}>
  <div class="flex items-center">
    <a href="/" class="flex items-center">
      <img src="/logo.webp" alt="Medina's Cocina Logo" width="64" height="64" class="mr-4">
    </a>
    <button class="block lg:hidden p-2 border rounded" id="menu-button" aria-label="Mobile hamburger menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
  <nav class="w-full lg:flex lg:items-center lg:w-auto hidden" id="menu">
    <ul class="flex flex-col lg:flex-row lg:space-x-4">
      <li><a href="/shop" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Shop</a></li>
      <li><a href="/delivery" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Delivery</a></li>
      <li><a href="/about" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">About</a></li>
      <li><a href="/contact" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Contact</a></li>
    </ul>
  </nav>
  <div class="flex items-center">
		<Sheet.Root open={cartVisible} >
			<Sheet.Trigger>
				<div class="relative cursor-pointer">
					{#if getTotalItems() > 0}
						<div class="absolute -top-4 -left-4">
							<p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{getTotalItems()}</p>
						</div>
					{/if}
					<ShoppingCart id="shopping-cart" class="mr-6" onclick={() => cartVisible = true} />
				</div>
			</Sheet.Trigger>
			<Sheet.Content>
				<Sheet.Header>
					<Sheet.Title>Cookie Cart</Sheet.Title>
					<Sheet.Description>
						{#if getTotalItems() > 0}
							{#each cart.items as item}
								<div class="flex items-center gap-3 mb-4">
									<img src={item.image} alt={item.name} class="w-20 h-20" />
									<div>
										<p>{(item.quantity ?? 0)} x {item.name}</p>
										<p>${(item.price * (item.quantity ?? 0)).toFixed(2)}</p>
										<div class="mt-2">
											<div class="flex items-center justify-center border rounded-xl p-2 w-fit">
												<button class="px-1 border-r border-r-primary/50 cursor-pointer" onclick={() => decrementQuantity(item)}><Minus /></button>
												<div class="px-4">{(item.quantity ?? 0)}</div>
												<button class="px-1 border-l border-l-primary/50 cursor-pointer" onclick={() => { item.quantity = (item.quantity ?? 0) + 1; }}> <Plus /> </button>
											</div>
											<button class="text-red-500 cursor-pointer" onclick={() => removeItem(item.id)}>Remove</button>
										</div>
									</div>
								</div>
							{/each}

							<div class="mt-4">
								<h2 class="text-2xl font-bold">Order Summary</h2>
								<p class="mb-4">Number of items: {getTotalItems()}</p>

								<p class="text-xl">Total: ${calculateTotal().toFixed(2)}</p>
								<p class="text-xl">Shipping: ${shipping.toFixed(2)}</p>
								<hr>
								<p class="text-xl">Grand Total: ${(calculateTotal() + shipping).toFixed(2)}</p>
							</div>

							<Button class="w-full mt-4" onclick={() => goto('/checkout')}>Proceed to Checkout</Button>
						{:else}
							You currently have no items in your cart.
						{/if}
					</Sheet.Description>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
		{#if user}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root>
						<Avatar.Image src={user.identities[0].identity_data.avatar_url} class="cursor-pointer" alt="User Github Avatar" />
						<Avatar.Fallback>
							<UserRound onclick={() => goto('/auth/logout')} />
						</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item class="cursor-pointer">Profile</DropdownMenu.Item>
						<DropdownMenu.Item class="cursor-pointer">Orders</DropdownMenu.Item>
						<DropdownMenu.Item class="cursor-pointer" onclick={() => goto('/auth/logout')}>Log Out</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root>
						<Avatar.Fallback>
							<LogIn />
						</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item class="cursor-pointer" onclick={() => goto('/auth/login')}>Log In</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/if}
  </div>
</header>
