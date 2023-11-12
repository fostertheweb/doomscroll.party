<script lang="ts">
	export let data;

	let video: HTMLVideoElement;

	function play() {
		console.log('loadeddata');
	}

	function end() {
		console.log('ended');
	}
</script>

<div class="flex h-screen w-screen items-center justify-center bg-slate-800">
	<video
		class="max-h-screen rounded-lg shadow-lg"
		autoplay
		bind:this={video}
		on:loadeddata={play}
		on:ended={end}
		src={data.video}
	>
		<track kind="captions" />
	</video>
</div>

<style>
	video {
		max-height: 80vh;
	}
</style>
