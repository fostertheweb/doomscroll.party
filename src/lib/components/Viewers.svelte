<script lang="ts">
	import type { User } from '$lib/db';
	import Viewer from './Viewer.svelte';

	export let currentUser: User | undefined;

	let users: User[] = [];
</script>

<div class="absolute bottom-0 left-0 flex w-full items-center gap-8 p-4">
	{#if currentUser}
		<Viewer user={{ ...currentUser, name: 'Me' }} />
	{/if}

	{#each users as user}
		<Viewer {user} />
	{/each}
</div>
