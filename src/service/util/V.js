const htmlns = 'http://www.w3.org/1999/xhtml';
export class V {
	constructor() {
		const d = document;
		this.d = d;
		this.x = d.getElementsByTagName('html')[0];
		this.b = d.getElementsByTagName('body')[0];
		this.h = d.getElementsByTagName('head')[0];
	}
	c(tag) {
		return this.d.createElementNS(htmlns, tag);
	}
	a(parent, elm) {
		return parent.appendChild(elm);
	}
	ct(tag, text, className) {
		const elm = this.c(tag);
		elm.textContent = text;
		elm.className = className ? className : '';
		return elm;
	}
	h1(text, className) {
		return this.ct('h1', text, className);
	}
	hr(text, className) {
		return this.ct('hr', text, className);
	}
	div(className) {
		return this.ct('div', '', className);
	}
	br(className) {
		return this.ct('br', '', className);
	}
}
