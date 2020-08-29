import { V } from './V';
const v = V.gi();
const f = { oM: () => {}, oL: () => {}, i: null };
const M = 'message';
export class PostMessager {
	static buildChild(url, isFullScreen) {
		v.w.addEventListener(
			M,
			(e) => {
				f.oM(e);
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
	static isChildFrame() {
		return window.parent !== window;
	}
}
