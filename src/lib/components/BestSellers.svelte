<script lang="ts">
  const bestSellers = [
    { name: 'Chocolate Chip', image: '/images/cookies/chocolate_chip.jpg', description: 'Classic chocolate chip cookies with a crispy edge and chewy center.' },
    { name: 'Cookies & Cream', image: '/images/cookies/cookies_and_cream.jpg', description: 'Delicious cookies with chunks of cream-filled chocolate cookies.' },
    { name: 'Blueberry Muffin', image: '/images/cookies/blueberry_muffin.jpg', description: 'Soft and moist cookies with fresh blueberries and a hint of lemon.' },
    { name: 'Strawberry', image: '/images/cookies/strawberry.webp', description: 'Sweet and tangy strawberry cookies with a burst of flavor in every bite.' },
    { name: 'Birthday Cake', image: '/images/cookies/birthday_cake.webp', description: 'Fun and festive cookies with colorful sprinkles and a rich vanilla flavor.' },
    { name: 'Red Velvet', image: '/images/cookies/red_velvet.webp', description: 'Decadent red velvet cookies with a hint of cocoa and a creamy center.' }
  ];
</script>


<section class="relative pb-24">
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4 text-center">Best Selling Cookie Flavors</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-2">
      {#each bestSellers as cookie}
      <div class="p-4 text-center">
          <img src={cookie.image} alt={cookie.name} class="w-full aspect-square object-contain mb-4 p-8 rounded">
          <h3 class="text-2xl text-primary font-bold mb-2">{cookie.name}</h3>
          <p>{cookie.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- <style>
  section {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 500px;
      background: linear-gradient(0deg, rgb(0 0 0 / 0.05) 0%, rgba(255, 255, 255, 1) 100%);
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      background-image: url('/rips/rip10.webp');
      background-repeat: no-repeat;
      aspect-ratio: 2400 / 236;
      height: auto;
      background-size: contain;
      filter: drop-shadow(2px -6px 4px rgba(0, 0, 0, 0.15));
    }
  }
</style> -->