import type { User } from '$lib/db.js';

export function load({ cookies }) {
	const cookie = cookies.get('doomer');

	if (cookie) {
		const user = JSON.parse(cookie) as User;

		return { user };
	}

	return {};
}
