<script lang="ts">
	import { goto } from '$app/navigation';
  import { UserRound } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';

  let { data } = $props();
  let { session, supabase, user } = $derived(data);

</script>

<div class="container mx-auto p-4">
  <div class="bg-white shadow-md rounded-lg p-6">
    <div class="flex flex-col md:flex-row items-center md:items-start">
      {#if user}
      <Avatar.Root>
        <Avatar.Image src={user?.identities[0].identity_data.avatar_url} class="cursor-pointer" alt="User Github Avatar" />
          <Avatar.Fallback>
            <UserRound onclick={() => goto('/auth/logout')} />
          </Avatar.Fallback>
        </Avatar.Root>
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold mb-2">{user?.user_metadata.name}</h2>
          <p class="text-gray-600 mb-4">{user?.user_metadata.email}</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 800px;
  }
</style>