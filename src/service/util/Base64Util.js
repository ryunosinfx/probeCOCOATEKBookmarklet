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
}
