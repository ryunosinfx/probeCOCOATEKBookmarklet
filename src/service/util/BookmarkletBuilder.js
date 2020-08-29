export class BookmarkletBuilder {
	static build(src) {
		const bookmarklet = src
			.split('\t')
			.join('')
			.split('\n')
			.join('');
		return `javascript:(()=>{${bookmarklet}})()`;
	}
}
