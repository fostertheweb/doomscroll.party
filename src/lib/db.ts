import { createStore, type Table } from 'tinybase/cjs';
import { createPartyKitPersister } from 'tinybase/persisters/persister-partykit-client';

import type PartySocket from 'partysocket';

export const store = createStore();

export type Video = {
	id: string;
	title: string;
	thumbnailUrl: string;
	authorName: string;
	authorUrl: string;
	videoId: string;
	videoSrc: string;
	addedAt: number;
	addedBy: string;
	position: number;
};

store.setTablesSchema({
	videos: {
		title: { type: 'string' },
		thumbnailUrl: { type: 'string' },
		authorName: { type: 'string' },
		authorUrl: { type: 'string' },
		videoId: { type: 'string' },
		videoSrc: { type: 'string' },
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

export function videosTableToCollection(table: Table) {
	const rows = Object.entries(table).map(([id, video]) => {
		return { id, ...video } as Video;
	});

	return rows;
}
