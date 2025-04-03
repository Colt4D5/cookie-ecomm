<script>
  let terms = $state([
    {
      title: "Introduction",
      content: "Welcome to our website. By accessing and using this website, you agree to be bound by the following terms and conditions..."
    },
    {
      title: "Privacy Policy",
      content: "We are committed to protecting your privacy. Our privacy policy explains how we collect, use, and protect your personal information..."
    },
    {
      title: "User Responsibilities",
      content: "As a user of this website, you agree to use the site in a lawful and respectful manner. You must not engage in any activities that could harm the website or other users..."
    },
    {
      title: "Intellectual Property",
      content: "All content on this website, including text, images, and logos, is the property of our company and is protected by intellectual property laws..."
    },
    {
      title: "Governing Law",
      content: "These terms and conditions are governed by the laws of the jurisdiction in which our company is based. Any disputes arising from the use of this website will be resolved in accordance with these laws..."
    }
  ]);
</script>

<section class="container mx-auto max-w-3xl p-4">
  <h1 class="text-center mb-8 text-2xl font-bold">Terms and Conditions</h1>
  {#each terms as term}
    <div class="term mb-6">
      <h2 class="text-xl font-semibold mb-2">{term.title}</h2>
      <p class="text-base leading-relaxed">{term.content}</p>
    </div>
  {/each}
</section>
