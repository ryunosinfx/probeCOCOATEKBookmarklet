export class F {
	static async l(path, ct = 'application/json', isText) {
		const r = {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'omit',
			redirect: 'follow',
			referrer: 'no-referrer',
			headers: { 'Content-Type': ct },
		};
		const res = await fetch(path, r);
		return isText ? await res.text() : await res.blob();
	}
}
