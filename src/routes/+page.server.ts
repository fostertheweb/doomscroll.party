import { redirect } from '@sveltejs/kit';
import ShortUniqueId from 'short-unique-id';

export const actions = {
	async default({ cookies, request }) {
		const data = await request.formData();
		const { randomUUID: createSlug } = new ShortUniqueId({ length: 10 });
		const slug = createSlug();
		const user = {
			name: data.get('name'),
			emoji: data.get('emoji'),
			color: data.get('color')
		};
		cookies.set('doomer', JSON.stringify(user), {
			path: '/',
			sameSite: 'lax',
			httpOnly: true
		});

		throw redirect(302, `/party/${slug}`);
	}
};
