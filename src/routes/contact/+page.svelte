<script>
  import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

  let contactDetails = $state({
    phone: "+1 (555) 123-4567",
    email: "contact@medinascocina.com",
    address: "1234 Cocina St, Food City, FC 56789"
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

<section class="container p-8 font-sans">
  <h1 class="text-3xl font-bold text-gray-800">Contact Us</h1>
  <p class="mt-4">If you have any questions or need further assistance, please feel free to reach out to us using the following contact details:</p>

  <h2 class="text-2xl font-semibold text-gray-700 mt-6">Phone</h2>
  <p class="mt-2">{contactDetails.phone}</p>

  <h2 class="text-2xl font-semibold text-gray-700 mt-6">Email</h2>
  <p class="mt-2">{contactDetails.email}</p>

  <h2 class="text-2xl font-semibold text-gray-700 mt-6">Address</h2>
  <p class="mt-2">{contactDetails.address}</p>

  <h2 class="text-2xl font-semibold text-gray-700 mt-6">Instructions</h2>
  <p class="mt-2">Please call us during our business hours from 9 AM to 5 PM, Monday to Friday. For email inquiries, we aim to respond within 24 hours. If you are visiting us, please make sure to schedule an appointment in advance.</p>
</section>
