import { PostMessager } from '../util/PostMessager';
import { V } from '../util/V';
import { fileListjson } from '../constants/Constants';
const v = V.gi();
export class MainLogic {
	constructor() {
		PostMessager.init();
	}
	async getList() {
		console.log('MainLogic getList START');
		const result = await PostMessager.postToParent({ path: fileListjson });
		console.log(result);
		alert(result.msg);
		const div = v.div();
		v.a(div, v.pre(result.msg));
		v.a(v.b, div);
		console.log('MainLogic getList END');
	}
}
