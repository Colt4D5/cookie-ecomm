<script>
  let policies = $state([
    {
      title: "Privacy Policy",
      content: "We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data."
    },
    {
      title: "Data Collection",
      content: "We collect personal information when you visit our website, place an order, or subscribe to our newsletter. This may include your name, email address, and payment information."
    },
    {
      title: "Data Usage",
      content: "Your personal information is used to process orders, provide customer support, and send promotional materials. We do not sell or share your data with third parties."
    },
    {
      title: "Cookies",
      content: "Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand your preferences and improve our services."
    },
    {
      title: "Security",
      content: "We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure."
    },
    {
      title: "Changes to Policy",
      content: "We may update our privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically."
    },
    {
      title: "Contact Us",
      content: "If you have any questions or concerns about our privacy policy, please contact us at privacy@medinascocina.com."
    }
  ]);
</script>

<div class="container mx-auto p-4 max-w-screen-lg">
  <h1 class="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
  {#each policies as policy}
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{policy.title}</h2>
      <p class="text-gray-700">{policy.content}</p>
    </div>
  {/each}
</div>
