import { getTikTokEmbed } from '$lib/tiktok.js';
// @ts-expect-error no types package for jsdom
import { JSDOM } from 'jsdom';
// @ts-expect-error no types package for node-iframe
import { fetchFrame } from 'node-iframe';

// https://www.tiktok.com/embed/v2/7269345996604263685?lang=en-US&referrer=http%3A%2F%2Flocalhost%3A5173%2Fparty%2Fabc%3Furl%3Dhttps%3A%2F%2Fwww.tiktok.com%2F%40joelpatrick_%2Fvideo%2F7298908383736892714%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7256837196001592878&embedFrom=oembed

export async function load({ params }) {
	// Example TikTok URL:
	// https://www.tiktok.com/@sammythegolden247/video/7296220483555560746?is_from_webapp=1&sender_device=pc&web_id=7256837196001592878
	//
	// https://www.tiktok.com/@hoest/video/7282840340221152518?is_from_webapp=1&sender_device=pc&web_id=7256837196001592878

	const partyId = params.partyId;
	// const videoId = params.videoId;
	const videoId = '7272858479830781227';
	// TODO: find video by id, get url
	const { title, author_name, author_url, thumbnail_url } = await getTikTokEmbed(
		'https://www.tiktok.com/@tuckot/video/7272858479830781227?is_from_webapp=1&sender_device=pc&web_id=7256837196001592878'
	);
	const frame = await fetchFrame({ url: `https://www.tiktok.com/embed/v2/${videoId}` });
	const DOMParser = new JSDOM().window.DOMParser;
	const parser = new DOMParser();
	const document = parser.parseFromString(frame, 'text/html');
	const src = document.querySelector('video')?.src ?? '';

	const data = { id: videoId, src, title, author_name, author_url, thumbnail_url };
	console.log({ data });
	return data;
}
