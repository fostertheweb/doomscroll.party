<script>
	import { linear } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<script async src="https://www.tiktok.com/embed.js"></script>
</svelte:head>

{#key data.pathname}
	<div in:slide={{ axis: 'y', duration: 300, easing: linear }} class="h-full">
		<slot />
	</div>
{/key}
