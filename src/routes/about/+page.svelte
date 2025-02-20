<script>
  import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="relative bg-cover bg-center h-96 mb-12" style="background-image: url('/cookies-hero.jpg');">
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Medina's Cocina</h1>
    <p class="text-lg md:text-2xl mb-8">Delicious food made with love</p>
    <Button onclick={() => goto('/about')}>Get Started</Button>
  </div>
</div>

<section class="container p-8 font-sans">

  <h1 class="text-3xl font-bold text-gray-800">About Us</h1>
  <p class="text-lg text-gray-600 mt-4">Welcome to Medina's Cocina! We are passionate about bringing you the best culinary delights from around the world. Our mission is to provide high-quality ingredients and recipes that inspire you to create delicious meals at home.</p>

  <h2 class="text-2xl font-semibold text-gray-800 mt-6">Our Story</h2>
  <p class="text-lg text-gray-600 mt-2">Medina's Cocina was founded with the belief that everyone deserves access to fresh, high-quality ingredients. We source our products from trusted suppliers and ensure that every item meets our high standards.</p>

  <h2 class="text-2xl font-semibold text-gray-800 mt-6">Our Values</h2>
  <ul class="list-disc list-inside text-lg text-gray-600 mt-2">
    <li>Quality: We never compromise on the quality of our products.</li>
    <li>Customer Satisfaction: Your satisfaction is our top priority.</li>
    <li>Sustainability: We are committed to sustainable sourcing and practices.</li>
  </ul>

  <h2 class="text-2xl font-semibold text-gray-800 mt-6">Get in Touch</h2>
  <p class="text-lg text-gray-600 mt-2">If you have any questions or need assistance, feel free to reach out to us. We are here to help!</p>

  <div class="mt-6">
    <Button class="text-lg cursor-pointer" onclick={() => goto('/shop')}>Shop</Button>
    <Button class="text-lg cursor-pointer" variant="outline" onclick={() => goto('/contact')}>Contact Us</Button>
  </div>
  
  <h2 class="text-2xl font-semibold text-gray-800 mt-6">Follow Us</h2>
  <p class="text-lg text-gray-600 mt-2">Stay updated with our latest products and offers by following us on social media!</p>
  
  <ul class="list-disc list-inside text-lg text-gray-600 mt-2">
    <li><a href="https://facebook.com">Facebook</a></li>
    <li><a href="https://instagram.com">Instagram</a></li>
    <li><a href="https://twitter.com">Twitter</a></li>
  </ul>
</section>
