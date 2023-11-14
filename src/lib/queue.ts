import { writable } from 'svelte/store';
import type { Video } from './db';

export const queue = writable<Video[]>([]);
export const currentVideo = writable<Video | Partial<Video> | null>(null);
