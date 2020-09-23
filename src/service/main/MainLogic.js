import { PostMessager } from '../util/PostMessager';
import { V } from '../util/V';
import { FileDLHelper } from '../util/FileDLHelper';
import { ZipDecoder } from '../util/ZipDecoder';
import { ExporsFileDecoder } from './ExporsFileDecoder';
import { fileListjson } from '../constants/Constants';
const v = V.gi();
export class MainLogic {
	constructor() {
		PostMessager.init();
		this.strage = {};
		this.ExporsFileDecoder = new ExporsFileDecoder();
	}
	async getList() {
		console.log('MainLogic getList START');
		const result = await PostMessager.postToParent({ path: fileListjson, isText: true });
		console.log(result);
		const msg = result;
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
		await Promise.all(promises);
		return obj.list;
	}
	async getZip(path) {
		const blob = await PostMessager.postToParent({ path });
		const decoded = ZipDecoder.decode(blob);
		const bin = decoded['export.bin'];
		console.log('----decoded---getZip bin:' + bin);
		console.log(decoded);
		const hash = bin ? bin.hash : null;
		const file = bin ? this.ExporsFileDecoder.decode(bin.u8a) : {};
		this.strage[path] = { blob, hash, file };
	}
	get(path) {
		return this.strage[path];
	}
	dl(path) {
		const fns = path.split('/');
		const fn = fns[fns.length - 1];
		const blob = this.strage[path].blob;
		console.log('MainLogic getList blob:' + blob);
		if (blob) {
			console.log('MainLogic getList fn:' + fn);
			FileDLHelper.dl(fn, blob, undefined, true);
		}
	}
}
