import { PostMessager } from '../util/PostMessager';
import { V } from '../util/V';
import { FileDLHelper } from '../util/FileDLHelper';
import { fileListjson } from '../constants/Constants';
const v = V.gi();
export class MainLogic {
	constructor() {
		PostMessager.init();
		this.strage = {};
	}
	async getList() {
		console.log('MainLogic getList START');
		const result = await PostMessager.postToParent({ path: fileListjson });
		console.log(result);
		const msg = result.msg;
		const obj = {};
		try {
			obj.list = JSON.parse(msg);
		} catch (e) {}
		console.log('MainLogic getList END');
		const promises = [];
		for (let row of obj.list) {
			const url = row.url;
			promises.push(this.getZip(url));
		}

		return obj.list;
	}
	async getZip(path) {
		const blob = await PostMessager.postToParent({ path });
		this.strage[path] = blob;
	}
	dl(path) {
		const fns = path.split('/');
		const fn = fns[fns.length - 1];
		const blob = this.strage[path];
		console.log('MainLogic getList blob:' + blob);
		if (blob) {
			console.log('MainLogic getList fn:' + fn);
			FileDLHelper.dl(fn, blob);
		}
	}
}
