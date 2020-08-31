import { githubPages } from './service/constants/Constants';
import { V } from './service/util/V';
import { PostMessager } from './service/util/PostMessager';
import { FileLoadService } from './service/FileLoadService';
const v = V.gi(['Error']);
const main = () => {
	v.init();
	v.b.style.height = '100%';
	v.b.style.padding = '0';
	v.b.style.margin = '0';
	v.init();
	const i = PostMessager.buildChild(githubPages, true);
	const m = () => {
		PostMessager.postToChild('OK');
	};
	const f = async (e) => {
		console.log('main e:' + e + ' /' + typeof e);
		console.log(e);
		const d = await FileLoadService.getFile(e.data.path, true);
		console.log('main data:' + d + ' /' + typeof d);
		console.log(d);
		// PostMessager.postToChild(d);
		return d;
	};
	PostMessager.setOnMessage(f);
	PostMessager.setOnLoad(m);
};
main();
