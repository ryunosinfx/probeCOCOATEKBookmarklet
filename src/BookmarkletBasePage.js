import { V } from './service/util/V';
import { F } from './service/util/Fetcher';
import { BookmarkletBuilder } from './service/util/BookmarkletBuilder';
const v = V.gi();

export class BookmarkletBasePage {
	static async main() {
		const url = location.href;
		const src = await F.l(`${url}dist/bookmarklet.js`, undefined, true);
		v.a(v.b, v.h1('bookmarklet !'));
		const a = v.an('bookmarkletAncker');
		v.a(v.b, a);
		a.href = BookmarkletBuilder.build(src);
	}
}
