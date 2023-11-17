import { createStore, type Table } from 'tinybase/cjs';
import { createPartyKitPersister } from 'tinybase/persisters/persister-partykit-client';

import type PartySocket from 'partysocket';
import { getIdFromUrl, getTikTokEmbed } from './tiktok';

export const store = createStore();

export type Video = VideoListItem & {
	authorUrl: string;
	videoSrc: string;
};

export type VideoListItemInput = {
	title: string;
	thumbnailUrl: string;
	authorName: string;
	videoId: string;
	addedAt: number;
	addedBy: string;
	position: number;
};

export type VideoListItem = VideoListItemInput & { id: string };

export async function createVideoListItem(url: string, addedBy: string) {
	const embed = await getTikTokEmbed(url);

	console.log({ embed });

	const video: VideoListItemInput = {
		title: embed.title,
		thumbnailUrl: embed.thumbnail_url,
		authorName: embed.author_name,
		videoId: getIdFromUrl(url)!,
		addedAt: Date.now(),
		addedBy,
		position: 0
	};

	store.addRow('videos', video);
}

export type User = {
	name: string;
	emoji: string;
	color: string;
	isHost: boolean;
};

store.setTablesSchema({
	videos: {
		title: { type: 'string' },
		thumbnailUrl: { type: 'string' },
		authorName: { type: 'string' },
		videoId: { type: 'string' },
		addedAt: { type: 'number' },
		addedBy: { type: 'string' },
		position: { type: 'number' }
	},
	doomers: {
		emoji: { type: 'string' },
		name: { type: 'string' },
		color: { type: 'string' },
		isHost: { type: 'boolean', default: false }
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
		return { id, ...video } as VideoListItem;
	});

	return rows;
}
