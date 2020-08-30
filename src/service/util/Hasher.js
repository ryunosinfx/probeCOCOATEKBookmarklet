import { Base64Util } from './Base64Util';
export const te = new TextEncoder('utf-8');
export const td = new TextDecoder('utf-8');
export class Hasher {
	static async sha256(m, sc = 1) {
		return await Hasher.d(m, 'SHA-256', sc);
	}
	static async sha384(m, sc = 1) {
		return await Hasher.d(m, 'SHA-384', sc);
	}
	static async sha512(m, sc = 1) {
		return await Hasher.d(m, 'SHA-512', sc);
	}
	static async sha1(m, sc = 1) {
		return await Hasher.d(m, 'SHA-1', sc);
	}
	static async d(m, a = 'SHA-256', sc = 1) {
		let r = te.encode(m);
		for (let i = 0; i < sc; i++) {
			r = await window.crypto.subtle.digest(a, r);
		}
		return Base64Util.aToB64u(r);
	}
}
