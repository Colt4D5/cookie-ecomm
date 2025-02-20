<script>
	import { Button } from "./ui/button";

  let { flavor, description, imageUrl } = $props();
</script>

<section class="container mx-auto my-20">
  <h2 class="text-4xl text-center font-bold mb-8">Flavor of the Month</h2>
  <div class="flex flex-wrap gap-32 justify-around">
    <div class="image-container flex-2">
      <img src={imageUrl} alt={flavor} class="w-auto h-auto rounded-lg ml-auto" />
    </div>
    <div class="text-container flex-3 min-w-[300px] p-4">
      <h3 class="text-2xl font-bold mt-0">{flavor}</h3>
      <p>{@html description}</p>
      <div class="buttons mt-4">
        <Button href="/shop" class="mr-2 text-lg cursor-pointer" >Shop Now</Button>
      </div>
    </div>
  </div>
</section>