<script lang="ts">
	import type { User } from '$lib/db';
	import Viewer from './Viewer.svelte';

	export let currentUser: User | undefined;

	let users: User[] = [];
</script>

<div class="flex items-center gap-8 pb-5">
	{#if currentUser}
		<Viewer user={{ ...currentUser, name: 'Me' }} />
	{/if}

	{#each users as user}
		<Viewer {user} />
	{/each}
</div>
