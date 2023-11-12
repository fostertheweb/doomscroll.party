import { JSDOM } from 'jsdom';
import { fetchFrame } from 'node-iframe';

export async function load() {
	const frame = await fetchFrame({ url: 'https://www.tiktok.com/embed/v2/7269345996604263685' });
	const dom = new JSDOM().window.DOMParser;
	const parser = new dom();
	const document = parser.parseFromString(frame, 'text/html');
	const video = document.querySelector('video').src;

	return { video };
}
