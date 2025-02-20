<script>
	import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-svelte";

  
</script>

<footer class="relative bg-primary text-white pt-48">
  <div id="footer-top" class="container mx-auto px-4 mb-12">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-2">Medina's Cocina</h2>
        <img src="/logo.webp" alt="Medina's Cocina" class="w-32 h-32 mx-auto" />
      </div>
      <div>
        <h2 class="text-lg font-semibold underline">Shop</h2>
        <ul>
          <li><a href="/shop" class="text-white hover:text-gray-300">Shop</a></li>
          <li><a href="/cart" class="text-white hover:text-gray-300">Cart</a></li>
          <li><a href="/orders" class="text-white hover:text-gray-300">Orders</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-lg font-semibold underline">Information</h2>
        <ul>
          <li><a href="/faq" class="text-white hover:text-gray-300">FAQ</a></li>
          <li><a href="/support" class="text-white hover:text-gray-300">Support</a></li>
          <li><a href="/about" class="text-white hover:text-gray-300">About</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-lg font-semibold underline">Contact</h2>
        <ul>
          <li><a href="/contact" class="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
      <div>
        <ul class="flex justify-center space-x-4">
          <li><a href="https://facebook.com" class="text-white hover:text-gray-300"><Facebook class="Facebook" /></a></li>
          <li><a href="https://twitter.com" class="text-white hover:text-gray-300"><Twitter /></a></li>
          <li><a href="https://instagram.com" class="text-white hover:text-gray-300"><Instagram /></a></li>
          <li><a href="https://linkedin.com" class="text-white hover:text-gray-300"><Linkedin /></a></li>
          <li><a href="https://youtube.com" class="text-white hover:text-gray-300"><Youtube /></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div id="footer-bottom" class="bg-white text-black text-center px-2 py-3">
    <div class="mb-4 md:mb-0 text-sm">
      © {new Date().getFullYear()} All rights reserved. | <strong>Medina's Cocina</strong> | <a href="/privacy" class="hover:text-gray-600">Privacy Policy</a> | <a href="/terms" class="hover:text-gray-600">Terms of Service</a>
    </div>
  </div>
</footer>

<style>
  footer {
    &::after {
      content: '';
      position: absolute;
      top: -1px;
      rotate: 180deg;
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