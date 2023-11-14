<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentVideo } from '$lib/queue.js';

	export let data;

	$currentVideo = data.video!;

	function videoEnd() {
		goto('/party/abc/video/7298066105984175402');
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
