import { addToCart } from '$lib/server/cart';

export async function load() {
	let cart = [];
	return { cart };
}
