const SLASH = '&#47;';
const QUOTE = '&quot;';
export class BookmarkletBuilder {
	static build(src) {
		const rows = src
			.split('\t')
			.join('')
			.replace(/\/\*[^\/]+\*\//g, '')
			.split('\n');
		const filterd = [];
		for (let row of rows) {
			const newRow = row.replace(/http:\/\//g, 'http:' + SLASH + SLASH).replace(/https:\/\//g, 'https:' + SLASH + SLASH);
			filterd.push(
				newRow
					.split('//')[0]
					.split(SLASH)
					.join('/')
			);
		}
		const bookmarklet = filterd.join(' ');
		return `javascript:(()=>{${bookmarklet}})()`;
	}
}
