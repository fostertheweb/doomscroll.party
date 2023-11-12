<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;

	function videoEnd() {
		goto('/party/abc/videos/7282840340221152518');
	}

	const next = [
		{
			id: '7282840340221152518',
			url: '',
			src: 'https://v16m-default.tiktokcdn-us.com/ab4e27070cbe9e7920c1510357bc9750/6550e02b/video/tos/useast2a/tos-useast2a-pve-0068/oIISRlkELBdFPQRedtEAoeDBh2nhsEQWvbdRMJ/?a=1988&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C3&cv=1&br=2922&bt=1461&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=_G6uMBnZq8Zmoq8iyQ_vjDl8VAhLrus&mime_type=video_mp4&qs=0&rc=NTxpZTw3aDZnZzZmZjs8aEBpamZweWg6Zm53bjMzNzczM0AtMV5jY15gXi8xYWEzNS5hYSNiNmlvcjRfZDVgLS1kMTZzcw%3D%3D&l=202311120824140A0F186AB6530D18A8BD&btag=e00008000',
			title: 'Wait for the end 😎 #goldenretriever #dogsoftiktok #dog ',
			author_name: 'Sammy & Charlie',
			author_url: 'https://www.tiktok.com/@sammythegolden247',
			thumbnail_url:
				'https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/2173a84e891d4f2184c7b2a597536a08_1698783721?x-expires=1699948800&x-signature=zu%2F7qostDxNm6B6eaYzmJsVnHMs%3D'
		},
		{
			id: '7282840340221152518',
			src: 'https://v16m-default.tiktokcdn-us.com/50bd8b11399b54dd31f020e9a56262a9/6550e91f/video/tos/useast2a/tos-useast2a-pve-0068/oIISRlkELBdFPQRedtEAoeDBh2nhsEQWvbdRMJ/?a=1988&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C3&cv=1&br=2922&bt=1461&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=_G6uMBnZq8ZmoQ2.yQ_vjHYdVAhLrus&mime_type=video_mp4&qs=0&rc=NTxpZTw3aDZnZzZmZjs8aEBpamZweWg6Zm53bjMzNzczM0AtMV5jY15gXi8xYWEzNS5hYSNiNmlvcjRfZDVgLS1kMTZzcw%3D%3D&l=20231112090226539C2FFBBA61E41943D5&btag=e00008000',
			title:
				'They’re best friends 🥹🫶 (@Nash the Golden Retriever) #dog #cat #bestfriends #pets #wholesome #cute #hoest ',
			author_name: 'Hoest',
			author_url: 'https://www.tiktok.com/@hoest',
			thumbnail_url:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2d29413330bf4fd7ae7b403d5d4301b2_1695668409?x-expires=1699952400&x-signature=APcyeFllaGnCDRPdSkoiy9rE3MY%3D'
		},
		{
			id: '7282840340221152518',
			src: 'https://v16m-default.tiktokcdn-us.com/0cb685a1227f578a49564c769a39c4ed/6550e945/video/tos/useast2a/tos-useast2a-pve-0068/oIISRlkELBdFPQRedtEAoeDBh2nhsEQWvbdRMJ/?a=1988&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C3&cv=1&br=2922&bt=1461&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=_G6uMBnZq8ZmoAG.yQ_vjr14VAhLrus&mime_type=video_mp4&qs=0&rc=NTxpZTw3aDZnZzZmZjs8aEBpamZweWg6Zm53bjMzNzczM0AtMV5jY15gXi8xYWEzNS5hYSNiNmlvcjRfZDVgLS1kMTZzcw%3D%3D&l=20231112090304537013FBE272B3189299&btag=e00008000',
			title: 'They wre all the same #fyp #foryou #cats #catsoftiktok ',
			author_name: 'Sebas',
			author_url: 'https://www.tiktok.com/@sauceyogranny',
			thumbnail_url:
				'https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/o0cIzhwyEvyB41CRIAVNspfmgiwY9BNvLUAPpz?x-expires=1699952400&x-signature=8g%2BAXuuie94%2FBxhLvHLD3NzftWk%3D'
		}
	];

	let animated = false;

	function toggleAnimated() {
		animated = !animated;
	}
</script>

<div class="flex h-full max-h-screen flex-col gap-8 overflow-hidden p-8">
	<div class="flex h-full items-start gap-8">
		<video class="rounded-lg shadow-lg" autoplay on:ended={videoEnd} src={data.src}>
			<track kind="captions" />
		</video>
		<div class="flex h-full flex-col justify-between gap-6">
			<div class="flex h-full flex-col gap-6">
				<div class="flex flex-col gap-2 text-slate-50">
					<h2 class="text-xl">{data.title}</h2>
					<a class="text-lg font-medium text-teal-200/70" href={data.author_url} target="_blan"
						>@{data.author_name}</a
					>
				</div>

				<!-- Divider -->
				<div class="h-px bg-slate-700/60"></div>

				<h3 class="text-xl font-medium text-white">Coming Up</h3>

				<div class="grow space-y-6 rounded-lg">
					{#each next as next}
						<div class="flex items-center gap-3">
							<img class="h-16 shrink rounded-md" src={next.thumbnail_url} alt="tiktok thumbanil" />
							<div>
								<div class="text-slate-200">{next.title}</div>
								<div class="text-slate-400">{next.author_name}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class=" flex items-center gap-8">
				<div class="relative flex h-12 w-12 items-center justify-center">
					<div
						class:dsp-pulse={animated}
						class="hidden h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-purple-500/60 ring-8 ring-purple-400/50"
					></div>
					<button
						on:click={toggleAnimated}
						class="absolute left-0 top-0 flex h-12 w-12 translate-x-0 items-center justify-center rounded-full border-2 border-lime-100/80 bg-lime-300/80 text-3xl"
					>
						<span class="drop-shadow-lg">🐶</span>
					</button>
				</div>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-100/90 bg-amber-300/80 text-3xl ring-4 ring-transparent"
				>
					<span class="drop-shadow-lg">🦖</span>
				</div>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-100/90 bg-sky-300/80 text-3xl ring-4 ring-transparent"
				>
					<span class="drop-shadow-lg">🐞</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	video {
		max-height: 100%;
	}

	.dsp-pulse {
		animation: pulse 1s ease-in none;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}
	}
</style>
