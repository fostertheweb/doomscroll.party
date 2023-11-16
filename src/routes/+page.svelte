<script>
	import { emoji } from '$lib/emoji';
</script>

<section class="flex max-w-xl flex-col gap-3 p-8">
	<form method="post" class="flex flex-col gap-4">
		<div class="grid grid-cols-5 gap-2">
			{#each emoji as e}
				<button class="rounded-md bg-white/30 px-3 py-2 text-3xl">{e}</button>
			{/each}
		</div>
		<input
			name="name"
			type="text"
			placeholder="Enter your name"
			class="flex items-center rounded-full border-2 border-white/25 bg-black/10 p-3 pl-6 text-white focus:border-white/70 focus:outline-none"
		/>
		<button
			type="submit"
			class="rounded-full bg-white/90 px-4 py-2 font-medium text-slate-800 shadow hover:bg-white"
			>Create Party</button
		>
	</form>
</section>
