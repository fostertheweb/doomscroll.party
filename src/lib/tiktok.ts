export async function getTikTokEmbed(videoUrl: string) {
	const url = `https://www.tiktok.com/oembed?url=${videoUrl}`;
	const response = await fetch(url);
	const json = await response.json();
	return json as TikTokEmbed;
}

export function getIdFromUrl(input: string) {
	const url = new URL(input);
	const part = url.pathname.split('/').pop();
	return part?.split('?')[0];
}

type TikTokEmbed = {
	version: string;
	type: string;
	title: string;
	author_url: string;
	author_name: string;
	width: string;
	height: string;
	html: string;
	thumbnail_width: number;
	thumbnail_height: number;
	thumbnail_url: string;
	provider_url: string;
	provider_name: string;
};
