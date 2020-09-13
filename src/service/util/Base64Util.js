const max = 50000;
export class Base64Util {
	from64(d) {
		const a = atob(d);
		const b = new Uint8Array(a.length);
		for (let i = 0; i < b.length; i++) {
			try {
				b[i] = a.charCodeAt(i);
			} catch (e) {
				console.log(i);
				console.log(e);
			}
		}
		const u16a = new Uint16Array(b.buffer);
		const l = u16a.length;
		const p = Math.ceil(l / max);
		const r = [];
		for (let j = 0; j < p; j++) {
			const start = max * j;
			const size = len - start;
			const p = size > max ? max : size > 0 ? size : len;
			const u = u16a.slice(start, start + p);
			r.push(String.fromCharCode(...u));
		}
		return r.join('');
	}
	to64(s) {
		const len = s.length;
		const pageNum = Math.ceil(len / max);
		const results = [];
		for (let j = 0; j < pageNum; j++) {
			const start = max * j;
			const size = len - start;
			const p = size > max ? max : size > 0 ? size : len;
			const end = start + p;
			const input = s.substring(start, end);
			// console.log('to64 j:' + j + '/p:' + p + '/size:' + size + '/lem:' + len + '/max:' + max + '/' + input);
			const u = new Uint16Array(p);
			for (let i = 0; i < p; i++) {
				u[i] = input.charCodeAt(i);
			}
			const c = String.fromCharCode(...new Uint8Array(u.buffer));
			results.push(c);
		}
		return btoa(results.join(''));
	}
	static u8a2bs(u8a) {
		const r = [];
		for (let e of u8a) {
			r.push(String.fromCharCode(e));
		}
		return r.join('');
	}

	static ab2bs(ab) {
		return Base64Util.u8a2bs(new Uint8Array(ab));
	}
	static aToB64(ai) {
		const ab = ai.buffer ? ai.buffer : ai;
		return btoa(Base64Util.ab2bs(ab));
	}
	static aToB64u(ai) {
		const b = Base64Util.aToB64(ai);
		return Base64Util.toB64u(b);
	}
	static bs2u8a(bs) {
		const l = bs.length;
		const a = new Uint8Array(new ArrayBuffer(l));
		for (let i = 0; i < l; i++) {
			a[i] = bs.charCodeAt(i);
		}
		return a;
	}
	static s2u(s) {
		const r = [];
		const sr = s.match(/\\u.{4}/gi);
		if (!sr) {
			return '';
		}
		const l = sr.length;
		console.log(sr);
		for (let i = 0; i < l; i++) {
			r.push(String.fromCharCode(sr[i].replace('\\u', '0x')));
		}
		return r.join('');
	}

	static bs2utf8(bs) {
		const tc = new TextDecoder('utf-8');
		const u8a = Base64Util.bs2u8a(bs);
		return tc.decode(u8a.buffer);
	}
	static dataURI2bs(dURI) {
		return atob(dURI.split(',')[1]);
	}
	static toB64u(b) {
		return b
			? b
					.split('+')
					.join('-')
					.split('/')
					.join('_')
					.split('=')
					.join('')
			: b;
	}
	static toB64(bu) {
		const l = bu.length;
		const c = l % 4 > 0 ? 4 - (l % 4) : 0;
		let b = bu
			.split('-')
			.join('+')
			.split('_')
			.join('/');

		for (let i = 0; i < c; i++) {
			b += '=';
		}
		return b;
	}
}
