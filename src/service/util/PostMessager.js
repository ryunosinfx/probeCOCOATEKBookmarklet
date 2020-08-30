import { V } from './V';
import { Hasher } from './Hasher';
const v = V.gi();
const f = { oM: async () => {}, oL: () => {}, i: null };
const M = 'message';
const q = {};
export class PostMessager {
	static init() {
		v.w.addEventListener(
			M,
			async (e) => {
				const d = e.data;
				if (d && typeof d === 'string' && d.indexOf('{') === 0) {
					try {
						const o = JSON.parent(d);
						if (o.hash) {
							const j = q[o.hash];
							if (j) {
								j(o);
								delete q[o.hash];
							} else {
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
						const o = JSON.parent(d);
						const r = await f.oM(e);
						if (o.hash) {
							const rd = { msg: r, hash: o.hash };
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
		f.i && window.parent === window ? f.i.contentWindow.postMessage(msg, '*') : null;
	}
	static postToParent(msg) {
		return new Promise((r) => {
			console.log('PostMessager postToParent START msg:' + msg);
			const h = Hasher.sha256(Date.now + '#' + Math.random(Date.now), 2);
			console.log('PostMessager postToParent hash:' + h);
			q[h] = r;
			window.parent !== window ? window.parent.postMessage(msg, '*') : null;
			console.log('PostMessager postToParent POST!');
			setTimeout(() => {
				console.log('PostMessager postToParent TIMEOUT!');
				r(null);
				delete q[h];
			}, 60000);
		});
	}
	static isChildFrame() {
		return window.parent !== window;
	}
}
