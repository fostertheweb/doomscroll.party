import { PUBLIC_PARTYKIT_HOST as host } from '$env/static/public';
import PartySocket from 'partysocket';
import { writable } from 'svelte/store';

export const party = writable<PartySocket | null>(null);

export function createPartySocket(slug: string) {
	return new PartySocket({
		host,
		room: slug
	});
}

export function createStoreSocket(slug: string) {
	return new PartySocket({
		host,
		room: slug,
		party: 'store'
	});
}
