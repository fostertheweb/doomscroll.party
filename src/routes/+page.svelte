<script lang="ts">
	import { emoji } from '$lib/emoji';

	import { createRadioGroup, melt } from '@melt-ui/svelte';

	let name = '';

	const colors = [
		'bg-amber-200',
		'bg-orange-200',
		'bg-lime-200',
		'bg-emerald-200',
		'bg-teal-200',
		'bg-sky-200',
		'bg-indigo-200',
		'bg-violet-200',
		'bg-fuchsia-200',
		'bg-rose-200'
	];

	function setName(event: InputEvent) {}

	const {
		elements: { root: emojiRoot, item: emojiItem, hiddenInput: emojiInput },
		helpers: { isChecked: isEmojiChecked }
	} = createRadioGroup({ defaultValue: '🐶' });

	const {
		elements: { root: colorRoot, item: colorItem, hiddenInput: colorInput },
		helpers: { isChecked: isColorChecked }
	} = createRadioGroup({ defaultValue: 'bg-lime-200' });
</script>

<section class="flex gap-8 p-8">
	<form method="post" class="flex max-w-xl flex-col gap-4">
		<div use:melt={$emojiRoot} class="grid grid-cols-5 gap-2">
			{#each emoji as option}
				<button
					id={option}
					aria-labelledby="{option}-label"
					use:melt={$emojiItem(option)}
					class="rounded-md bg-white bg-opacity-30 px-3 py-2 text-3xl"
					class:bg-opacity-70={$isEmojiChecked(option)}
				>
					<span class="drop-shadow">{option}</span>
				</button>
			{/each}
			<input name="emoji" use:melt={$emojiInput} />
		</div>
		<div use:melt={$colorRoot} class="grid grid-cols-5 gap-6">
			{#each colors as option}
				<button
					id={option}
					aria-labelledby="{option}-label"
					use:melt={$colorItem(option)}
					class={`${option} h-10 w-10 rounded-full border-2 border-white/70 ring-4 ring-transparent ring-opacity-70`}
					class:ring-rose-200={$isColorChecked(option)}
				>
				</button>
			{/each}
			<input name="color" use:melt={$colorInput} />
		</div>
		<input
			name="name"
			bind:value={name}
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
	<div class="-mt-40 flex items-center">
		<div class="group relative flex h-24 w-24 items-center justify-center">
			<div
				class:hidden={!$emojiInput.value}
				class={`flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/70 text-6xl ${$colorInput.value}`}
			>
				<span class="drop-shadow-lg">{$emojiInput.value}</span>
			</div>
			<span
				class:hidden={!name}
				class="absolute -bottom-10 z-20 rounded-full bg-white/10 px-2 py-px text-base text-white/80"
				>{name}</span
			>
		</div>
	</div>
</section>
