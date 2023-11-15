import { getTikTokEmbed } from '$lib/tiktok.js';
// @ts-expect-error no types package for jsdom
import { JSDOM } from 'jsdom';
// @ts-expect-error no types package for node-iframe
import { fetchFrame } from 'node-iframe';

export async function load({ params }) {
	const videoId = params.videoId;
	const frame = await fetchFrame({ url: `https://www.tiktok.com/embed/v2/${videoId}` });
	const DOMParser = new JSDOM().window.DOMParser;
	const parser = new DOMParser();
	const document = parser.parseFromString(frame, 'text/html');
	const src = document.querySelector('video')?.src ?? '';
	const anchors = document.querySelectorAll('a');

	let url = null;

	for (const a of anchors) {
		if (a.href.startsWith('https://www.tiktok.com/@')) {
			const creatorUrl = new URL(a.href);
			const base = 'https://www.tiktok.com/';
			const path = creatorUrl.pathname.split('/').pop();
			const author = path?.split('?')[0];
			const videoPath = `/video/${videoId}`;

			url = base + author + videoPath;

			break;
		}
	}

	if (!url || !src) {
		return {};
	}

	const { title, author_name, author_url, thumbnail_url } = await getTikTokEmbed(url);

	const video = {
		title,
		authorName: author_name,
		authorUrl: author_url,
		thumbnailUrl: thumbnail_url,
		videoId: videoId,
		videoSrc: src
	};

	return { video };
}
