import { V } from './service/util/V';
import { F } from './service/util/Fetcher';
import { BookmarkletBuilder } from './service/util/BookmarkletBuilder';
import { targetOrigin } from './service/constants/Constants';
const v = V.gi();

export class BookmarkletBasePage {
	static async main() {
		const url = location.href;
		console.log('url:' + url);
		const src = await F.l(`${url}dist/bookmarklet.js`, undefined, true);
		v.b.style.padding = '2em';
		v.a(v.b, v.h1('probeCOCOATEKBookmarklet !'));
		v.a(v.b, v.br());
		v.a(v.b, v.ct('span', '下のリンクをブックマークに登録してください。'));
		v.a(v.b, v.br());
		const a = v.an('probeCOCOATEKBookmarklet');
		v.a(v.b, a);
		a.href = BookmarkletBuilder.build(src);
		v.a(v.b, v.br());
		v.a(v.b, v.br());
		v.a(v.b, v.hr());
		v.a(v.b, v.br());
		v.a(v.b, v.ct('span', '下のリンクに飛んで、ブックマークレットを起動（ブックマークをクリック）してください'));
		const a2 = v.an(targetOrigin);
		v.a(v.b, a2);
		a2.href = targetOrigin;
	}
}
