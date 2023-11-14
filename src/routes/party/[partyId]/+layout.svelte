<script lang="ts">
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
	import Viewers from '$lib/components/Viewers.svelte';
	import { createDatabase, store, videosTableToCollection } from '$lib/db';
	import { createPartySocket, createStoreSocket, party } from '$lib/party';
	import { currentVideo, queue } from '$lib/queue';
	import { getIdFromUrl } from '$lib/tiktok';
	import type PartySocket from 'partysocket';

	let storeSocket: PartySocket | null;
	let tableListenerId: string;
	let url: string;

	const firstVideoId = '7281371275841260843';

	function handleSubmit() {
		getIdFromUrl(url);
	}

	onMount(async () => {
		storeSocket = createStoreSocket($page.params.partyId);
		await createDatabase(storeSocket);

		$party = createPartySocket($page.params.partyId);
		$party.addEventListener('message', async (event) => {
			console.log({ event });

			switch (event.data) {
				default:
					console.log('Event handler not implemented', event.data);
					break;
			}
		});

		$queue = videosTableToCollection(store.getTable('videos'));

		tableListenerId = store.addTableListener('videos', () => {
			$queue = videosTableToCollection(store.getTable('videos'));
		});
	});
</script>

<div class="flex h-full max-h-screen w-full flex-col gap-8 overflow-hidden p-8">
	<div class="flex h-full items-start gap-8">
		<slot />

		<div class="flex h-full w-full flex-col justify-between gap-6">
			<div class="flex h-full flex-col gap-6">
				{#if $currentVideo}
					<div class="flex flex-col gap-2 text-slate-50">
						<h2 class="text-xl">{$currentVideo.title}</h2>
						<a
							class="text-lg font-medium text-purple-300/70 hover:text-purple-300/90 hover:underline"
							href={$currentVideo.authorUrl}
							target="_blank"
						>
							@{$currentVideo.authorName}
						</a>
					</div>
				{:else}
					<a href={`/party/${$page.params.partyId}/video/${firstVideoId}`}>Start Scrolling</a>
				{/if}

				<!-- Divider -->
				<div class="h-px bg-white/5"></div>

				<Viewers />

				<h3 class="text-xl font-medium text-white">Coming Up</h3>

				<div class="grow space-y-6 rounded-lg">
					{#each $queue as video}
						<div class="flex items-center gap-3">
							<img class="h-16 shrink rounded-md" src={video.thumbnailUrl} alt="tiktok thumbanil" />
							<div>
								<div class="text-slate-200">{video.title}</div>
								<div class="text-slate-400">{video.authorName}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="flex items-center rounded-full border-2 border-white/25 bg-black/10 p-3 pl-6">
				<input
					bind:value={url}
					placeholder="https://www.tiktok.com/@americanhighshorts/video/7281371275841260843"
					type="text"
					class="w-full bg-transparent text-white focus:outline-none"
					name="url"
					id="url"
				/>
				<button
					on:click={handleSubmit}
					class="flex h-8 w-8 items-center justify-center text-3xl text-white/80 hover:text-white"
				>
					<svg
						class="dsp-plus-circle drop-shadow"
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 512 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.dsp-plus-circle {
		fill: currentColor;
	}
</style>
