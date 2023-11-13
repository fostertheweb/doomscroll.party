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

	let url = null;
	const src = document.querySelector('video')?.src ?? '';
	const anchors = document.querySelectorAll('a');

	for (const a of anchors) {
		if (a.href.startsWith('https://www.tiktok.com/@')) {
			url = a.href;
			break;
		}
	}

	if (!url || !src) {
		return {};
	}

	const { title, author_name, author_url, thumbnail_url } = await getTikTokEmbed(url);
	return { id: videoId, src, title, author_name, author_url, thumbnail_url };
}
