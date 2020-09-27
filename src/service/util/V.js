const ns = 'http://www.w3.org/1999/xhtml';

document.createElement = (tagName, option) => {
	return document.createElementNS(ns, tagName, option);
};
const o = { v: null };
export class V {
	static gi(dels = []) {
		if (!o.v) {
			o.v = new V();
		}
		for (let del of dels) {
			o.v.r(del);
		}
		return o.v;
	}
	constructor() {
		const d = document;
		this.d = d;
		this.w = window;
		this.x = this.tn('html');
		this.b = this.tn('body');
		this.h = this.tn('head');
	}
	init() {
		if (!this.b) {
			const dt = this.d.implementation.createDocumentType('html', '', '');
			const doc = this.d.implementation.createDocument(ns, 'html', dt);
			const h = doc.createElementNS(ns, 'head');
			const b = doc.createElementNS(ns, 'body');
			const m = doc.documentElement;
			this.a(m, h);
			this.a(m, b);
			this.d.appendChild(m, true);
			m.setAttribute('xmlns', ns);
			this.b = this.tn('body');
			this.h = this.tn('head');
		} else {
			for (let c of this.b.children) {
				this.b.removeChild(c);
			}
			for (let c of this.b.children) {
				this.b.removeChild(c);
			}
		}
	}
	c(tag) {
		return this.d.createElementNS(ns, tag);
	}
	a(parent, elm) {
		return parent.appendChild(elm);
	}
	b(elm, eventName, callback) {
		elm.addEventListener(eventName, callback);
	}
	gid(id) {
		return this.d.getElementById(id);
	}
	ct(tag, text, className) {
		const elm = this.c(tag);
		elm.textContent = text;
		elm.className = className ? className : '';
		return elm;
	}
	r(tag) {
		const es = this.d.getElementsByTagName(tag);
		if (!es) {
			return es;
		}
		for (let e of es) {
			this.re(e);
		}
	}
	re(e) {
		const p = e.parent ? e.parent : this.d;
		if (e.parent) {
			p.removeChild(e);
		} else {
			e.remove();
		}
	}
	tn(tag) {
		return this.d.getElementsByTagName(tag)[0];
	}
	h1(text, className) {
		return this.ct('h1', text, className);
	}
	hr(text, className) {
		return this.ct('hr', text, className);
	}
	pre(text, className) {
		return this.ct('pre', text, className);
	}
	div(className) {
		return this.ct('div', '', className);
	}
	br(className) {
		return this.ct('br', '', className);
	}
	an(text, className) {
		return this.ct('a', text, className);
	}
	iframe(className, url) {
		const elm = this.ct('iframe', '', className);
		elm.setAttribute('src', url);
		return elm;
	}
}
