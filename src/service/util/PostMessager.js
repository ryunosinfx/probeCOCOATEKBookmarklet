import { V } from './V';
import { Hasher } from './Hasher';
const v = V.gi();
const f = { oM: async () => {}, oL: () => {}, i: null };
const M = 'message';
const q = {};
export class PostMessager {
	static init() {
		console.log('PostMessager.init');
		v.w.addEventListener(
			M,
			async (e) => {
				const d = e.data;
				// console.log('f.oMc a d:' + d);
				if (d && typeof d === 'string' && d.indexOf('{') === 0) {
					try {
						const o = JSON.parse(d);
						// console.log('f.oMc b o.hash:' + o.hash);
						if (o.hash) {
							const j = q[o.hash];
							// console.log('f.oMc c j:' + j);
							if (j) {
								// console.log('f.oMc d j:' + j);
								j(o);
								delete q[o.hash];
							} else {
								// console.log('f.oMc e j:' + j);
								f.oM(e);
							}
						}
					} catch (e) {
						console.log(e);
					}
				}
			},
			false
		);
	}
	static buildChild(url, isFullScreen) {
		v.w.addEventListener(
			M,
			async (e) => {
				const d = e.data;
				if (d && typeof d === 'string' && d.indexOf('{') === 0) {
					try {
						const o = JSON.parse(d);
						const h = o.hash;
						console.log('f.oN a o.hash:' + h);
						const r = await f.oM({ data: o });
						console.log('f.oN b h:' + h);
						if (h) {
							const rd = { msg: r, hash: h };
							PostMessager.postToChild(JSON.stringify(rd));
						}
					} catch (e) {
						console.log(e);
					}
				}
			},
			false
		);
		const i = v.iframe('fullFrame', url);
		v.b.appendChild(i);
		i.onload = (e) => {
			setTimeout(() => {
				f.oL(e);
			}, 100);
		};
		if (isFullScreen) {
			i.style.height = window.innerHeight + 'px';
			i.style.width = '100%';
			i.style.border = '0';
		}
		f.i = i;
	}
	static setOnLoad(callback) {
		f.oL = callback;
	}
	static setOnMessageAtChild(callback) {
		if (PostMessager.isChildFrame()) {
			f.oM = callback;
		}
	}
	static setOnMessage(callback) {
		f.oM = callback;
	}
	static postToChild(msg) {
		// console.log('postToChild a');
		if (f.i && window.parent === window) {
			// console.log('postToChild b msg:' + msg);
			f.i.contentWindow.postMessage(msg, '*');
		}
	}
	static postToParent(msg) {
		const f = async (r) => {
			console.log('PostMessager postToParent START msg:' + msg + ' /' + typeof msg);
			const h = await Hasher.sha256(Date.now + '#' + Math.random(Date.now), 2);
			console.log('PostMessager postToParent hash:' + h);
			q[h] = r;
			msg.hash = h;
			window.parent !== window ? window.parent.postMessage(JSON.stringify(msg), '*') : null;
			console.log('PostMessager postToParent POST!');
			setTimeout(() => {
				if (q[h]) {
					console.log('PostMessager postToParent TIMEOUT!');
					r(null);
					delete q[h];
				}
			}, 60000);
		};
		return new Promise(f);
	}
	static isChildFrame() {
		return window.parent !== window;
	}
}
