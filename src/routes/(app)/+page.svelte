<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import BestSellers from '$lib/components/BestSellers.svelte';
  import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import Button from "$lib/components/ui/button/button.svelte";
	import CardHeader from "$lib/components/ui/card/card-header.svelte";
	import Card from "$lib/components/ui/card/card.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
	import type { PageProps } from './$types';
	import FlavorOfTheMonth from '$lib/components/FlavorOfTheMonth.svelte';

  const { data }: PageProps = $props();
  const { userProfile } = $derived(data);
  const useProfileSection = false;

  let email = $state('');
  let firstName = $state('');
  let lastName = $state('');

  const specialFlavor = {
    flavor: 'Red Velvet',
    description: '<p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse exercitationem est suscipit quasi fugiat et dolorem delectus maiores odio illum asperiores possimus reiciendis nihil sit saepe expedita eligendi magnam, soluta impedit perspiciatis. Nobis, quae dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur voluptatem in?</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse exercitationem est suscipit quasi fugiat et dolorem delectus maiores odio illum asperiores possimus reiciendis nihil sit saepe expedita eligendi magnam, soluta impedit perspiciatis. Nobis, quae dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>',
    imageUrl: '/images/cookies/red_velvet.webp'
  }

  $effect(() => {
    if (userProfile) {
      email = userProfile.email ?? '';
      firstName = userProfile.firstName ?? '';
      lastName = userProfile.lastName ?? '';
    }
  })

  // $inspect(userProfile);
</script>


<Hero />

<BestSellers />

<section>
  <img src="/images/cookie_separator.webp" alt="Cookie Separator" class="w-full" />
</section>

<FlavorOfTheMonth flavor={specialFlavor.flavor} description={specialFlavor.description} imageUrl={specialFlavor.imageUrl} />

{#if useProfileSection}
  {#if userProfile}
    {#if !userProfile.firstName || !userProfile.lastName}
      <Card>
        <CardHeader>
          <form method="POST" use:enhance={({ formData }) => {
            formData.set('firstName', firstName);
            formData.set('lastName', lastName);
            formData.set('email', email);
            return async ({ result }) => {
              if (result.type === 'success') {
                invalidate('/');
                alert('Updated!');
              } else {
                alert('Error!');
              }
            };
          }}>
            <div>
              <Label>Email</Label>
              <Input bind:value={email} />
            </div>
            <div>
              <Label>First Name</Label>
              <Input bind:value={firstName} />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input bind:value={lastName} />
            </div>
            <Button class="my-4" type="submit">Update</Button>
          </form>
        </CardHeader>
      </Card>
    {:else}
      <h2 class="text-xl">Welcome Back {userProfile.firstName} {userProfile.lastName}!</h2>
    {/if}
  {:else}
    <p class="mb-8">You are not logged in.</p>
  {/if}


  {#if userProfile}
    <Button href="/auth/logout">Log Out</Button>
  {:else}
    <Button href="/auth/login">Log In</Button>
  {/if}
{/if}