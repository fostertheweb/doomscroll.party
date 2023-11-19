<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { queue } from '$lib/queue.js';

	export let data;

	let videoElement: HTMLVideoElement;

	function delayPlay() {
		setTimeout(() => {
			videoElement.play();
		}, 750);
	}

	function videoEnd() {
		const currentIndex = $queue.findIndex((video) => video.videoId === data.video?.videoId);
		const nextVideo = $queue[currentIndex + 1];
		const nextVideoId = nextVideo.videoId;

		if (nextVideoId) {
			console.log({ nextVideoId });
			goto(`/party/${$page.params.partyId}/video/${nextVideoId}`);
		}

		// TODO: if last video, allow restart queue
	}
</script>

{#key data.pathname}
	<video
		class="h-full max-h-screen min-h-screen"
		bind:this={videoElement}
		on:canplay={delayPlay}
		on:ended={videoEnd}
		src={data.video?.videoSrc}
	>
		<track kind="captions" />
	</video>
{/key}

<style>
	video {
		aspect-ratio: 9 / 16;
		background-color: black;
	}
</style>
