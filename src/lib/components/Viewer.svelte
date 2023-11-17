<script lang="ts">
	import type { User } from '$lib/db';

	export let user: User;
</script>

<div class="group relative flex h-12 w-12 items-center justify-center">
	<div
		class={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/70 text-3xl ${user.color}`}
	>
		<span class="drop-shadow-lg">{user.emoji}</span>
	</div>
	<span class="absolute -bottom-6 z-20 rounded-full bg-white/10 px-2 py-px text-xs text-white/80"
		>{user.name}</span
	>
</div>
