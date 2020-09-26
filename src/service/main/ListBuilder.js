import { TimeUtil } from '../util/TimeUtil';
export class ListBuilder {
	constructor() {}
	build(list) {
		const retList = [];
		const map = {};
		const keylist = [];
		let index = 0;
		for (let row of list) {
			const path = row.url;
			const file = row.file;
			const created = row.reated;
			const hex = row.hex;
			const start = TimeUtil.unixTimeToDateFormat(file.startTimestamp * 1000);
			const end = TimeUtil.unixTimeToDateFormat(file.endTimestamp * 1000);
			const count = file.keys.length;
			const key = JSON.stringify([start, end, hex]);
			keylist.push(key);
			map[key] = { path, created, hex, start, end, count, index };
		}
		keylist.sort();
		for (let key of keylist) {
			index++;
			const row = map[key];
			row.index = index;
			retList.push(row);
		}
		return retList;
	}
}
