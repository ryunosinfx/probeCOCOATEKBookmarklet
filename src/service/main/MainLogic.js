import { PostMessager } from '../util/PostMessager';
import { fileListjson } from '../constants/Constants';
export class MainLogic {
	constructor() {}
	async getList() {
		console.log('MainLogic getList START');
		const result = await PostMessager.postToParent(fileListjson);
		console.log(result);
		alert(result);
		console.log('MainLogic getList END');
	}
}
