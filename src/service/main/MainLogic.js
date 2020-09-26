import { PostMessager } from '../util/PostMessager';
import { V } from '../util/V';
import { FileDLHelper } from '../util/FileDLHelper';
import { ZipDecoder } from '../util/ZipDecoder';
import { ExporsFileDecoder } from './ExporsFileDecoder';
import { fileListjson } from '../constants/Constants';
import { ListBuilder } from './ListBuilder';
const v = V.gi();
export class MainLogic {
	constructor() {
		PostMessager.init();
		this.strage = {};
		this.ExporsFileDecoder = new ExporsFileDecoder();
		this.ListBuilder = new ListBuilder();
	}
	async getList() {
		await this.ExporsFileDecoder.init;
		console.log('MainLogic getList START');
		const result = await PostMessager.postToParent({ path: fileListjson, isText: true });
		console.log(result);
		const msg = result;
		const obj = {};
		try {
			obj.list = JSON.parse(msg);
		} catch (e) {}
		console.log('MainLogic getList END');
		try {
			const promises = [];
			for (let row of obj.list) {
				promises.push(this.getZip(row));
			}
			await Promise.all(promises);
		} catch (e) {
			console.error(e);
		}
		return obj.list;
	}
	convert(list) {
		return this.ListBuilder.build(list);
	}
	async getZip(row) {
		const blob = await PostMessager.postToParent({ path: row.url });
		const decoded = await ZipDecoder.decode(blob);
		const bin = decoded['export.bin'];
		console.log('----decoded---getZip bin:' + bin);
		console.log(decoded);
		const hex = bin ? bin.hex : null;
		const file = bin ? await this.ExporsFileDecoder.decode(bin.u8a) : {};
		row.file = file;
		row.hex = hex;
		this.strage[row.url] = blob;
	}
	get(path) {
		return this.strage[path];
	}
	dl(path) {
		const fns = path.split('/');
		const fn = fns[fns.length - 1];
		const blob = this.strage[path];
		console.log('MainLogic getList blob:' + blob);
		if (blob) {
			console.log('MainLogic getList fn:' + fn);
			FileDLHelper.dl(fn, blob, undefined, true);
		}
	}
}
