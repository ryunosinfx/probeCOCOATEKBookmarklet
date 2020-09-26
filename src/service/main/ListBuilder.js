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
			const created = TimeUtil.unixTimeToDateFormat(row.created);
			const hex = row.hex;
			const start = TimeUtil.unixTimeToDateFormat(file.startTimestamp * 1000);
			const end = TimeUtil.unixTimeToDateFormat(file.endTimestamp * 1000);
			const count = file.keys.length;
			const key = JSON.stringify([start, end, created, hex]);
			keylist.push(key);
			map[key] = { path, created, hex, start, end, count, index };
		}
		keylist.sort();
		let lastStart = null;
		let lastEnd = null;
		for (let key of keylist) {
			index++;
			const row = map[key];
			if (lastStart === row.start) {
				row.start = '';
			} else {
				lastStart = row.start;
			}
			if (lastEnd === row.end) {
				row.end = '';
			} else {
				lastEnd = row.end;
			}

			row.index = index;
			retList.push(row);
		}
		return retList;
	}
}
