import { createStore, type Table } from 'tinybase/cjs';
import { createPartyKitPersister } from 'tinybase/persisters/persister-partykit-client';

import type PartySocket from 'partysocket';

export const store = createStore();

store.setTablesSchema({
	videos: {
		tiktokId: { type: 'string' },
		title: { type: 'string' },
		authorName: { type: 'string' },
		authorUrl: { type: 'string' },
		videoSrc: { type: 'string' },
		providerId: { type: 'string' },
		addedAt: { type: 'number' },
		addedBy: { type: 'string' },
		position: { type: 'number' }
	},
	doomers: {
		emoji: { type: 'string' },
		name: { type: 'string' },
		color: { type: 'string' }
	}
});

export async function createDatabase(partySocket: PartySocket) {
	const protocol = window.location.protocol.slice(0, -1) as 'http' | 'https';
	const persister = createPartyKitPersister(store, partySocket, protocol);

	await persister.startAutoSave();
	await persister.startAutoLoad();
}

export function cellsToRows(table: Table) {
	const rows = Object.entries(table).map(([id, item]) => {
		return { id, ...item };
	});

	return rows;
}
