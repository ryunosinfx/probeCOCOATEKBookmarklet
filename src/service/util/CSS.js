import { V } from './V';

const htmlns = 'http://www.w3.org/1999/xhtml';
export class CSS {
	constructor() {
		this.v = V.gi();
		// const s = this.v.d.createElement('style');
		// s.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
		// s.setAttribute('type', 'text/css');
		// this.v.a(this.v.h, s);
		// this.s = s;
		this.styles = {};
	}
	add(selector, styles) {
		this.styles[selector] = styles;
	}
	finish() {
		const styles = this.styles;
		for (let selector in styles) {
			const style = styles[selector];
			const elementList = this.v.d.querySelectorAll(selector);
			const sa = [];
			for (let key in style) {
				const value = style[key];
				sa.push(`${key}:${value};`);
			}
			const ss = sa.join('');
			for (let elm of elementList) {
				elm.setAttributeNS(htmlns, 'style', ss);
			}
		}
	}
	update() {}
}
