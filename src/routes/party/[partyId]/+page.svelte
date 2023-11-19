<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { queue } from '$lib/queue';

	let firstVideoId: string;

	queue.subscribe((videoQueue) => {
		firstVideoId = videoQueue[0]?.videoId;
	});
</script>

<div
	class="dsp-video-placeholder flex h-full items-center justify-center border border-white/10 bg-black/40 shadow backdrop-blur-sm"
>
	<div>
		<button
			disabled={!firstVideoId}
			on:click={() => goto(`/party/${$page.params.partyId}/video/${firstVideoId}`)}
			class="rounded-full bg-white/80 px-4 py-2 text-slate-800 shadow hover:bg-white disabled:cursor-not-allowed"
			>Start Scrolling</button
		>
	</div>
</div>

<style>
	.dsp-video-placeholder {
		aspect-ratio: 9 /16;
		/* margin-left: -0.35vw; */
	}
</style>
