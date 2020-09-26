import { Base64Util } from './Base64Util';
export const te = new TextEncoder('utf-8');
export const td = new TextDecoder('utf-8');
export class Hasher {
	static async sha256(m, sc = 1, type = 'base64') {
		return await Hasher.d(m, 'SHA-256', sc, type);
	}
	static async sha384(m, sc = 1, type = 'base64') {
		return await Hasher.d(m, 'SHA-384', sc, type);
	}
	static async sha512(m, sc = 1, type = 'base64') {
		return await Hasher.d(m, 'SHA-512', sc, type);
	}
	static async sha1(m, sc = 1, type = 'base64') {
		return await Hasher.d(m, 'SHA-1', sc, type);
	}
	static async d(m, a = 'SHA-256', sc = 1, type) {
		let s = te.encode(m);
		let r = null;
		for (let i = 0; i < sc; i++) {
			r = await window.crypto.subtle.digest(a, r ? r : s);
		}
		console.log(r);
		return type === 'base64' ? Base64Util.aToB64(r) : type === 'base64url' ? Base64Util.aToB64u(r) : Base64Util.aToHex(r);
	}
}
