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
		const data = await FileLoadService.getFile(e.data.path);
		PostMessager.postToChild(data);
	};
	PostMessager.setOnMessage(f);
	PostMessager.setOnLoad(m);
	v.b.appendChild(i);
};
main();
