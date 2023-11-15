import { writable } from 'svelte/store';
import type { Video, VideoListItem } from './db';

export const queue = writable<VideoListItem[]>([]);
export const currentVideo = writable<Video | Partial<Video> | null>(null);
