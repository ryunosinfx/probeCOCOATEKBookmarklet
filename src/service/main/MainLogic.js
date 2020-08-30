import { PostMessager } from '../util/PostMessager';
import { fileListjson } from '../constants/Constants';
export class MainLogic {
	constructor() {}
	async getList() {
		const result = await PostMessager.postToParent(fileListjson);
		console.log(result);
		alert(result);
	}
}
