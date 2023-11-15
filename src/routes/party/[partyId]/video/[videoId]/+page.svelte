<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { currentVideo, queue } from '$lib/queue.js';

	export let data;

	let nextVideoId: string;
	$currentVideo = data.video!;

	queue.subscribe((videoQueue) => {
		const currentIndex = videoQueue.findIndex((video) => video.videoId === data.video?.videoId);
		const nextVideo = videoQueue[currentIndex + 1];

		if (nextVideo) {
			nextVideoId = nextVideo.videoId;
		}
	});

	function videoEnd() {
		if (nextVideoId) {
			goto(`/party/${$page.params.partyId}/video/${nextVideoId}`);
		}
	}
</script>

<video class="rounded-lg shadow-lg" autoplay on:ended={videoEnd} src={data.video?.videoSrc}>
	<track kind="captions" />
</video>

<style>
	video {
		max-height: 100%;
	}
</style>
