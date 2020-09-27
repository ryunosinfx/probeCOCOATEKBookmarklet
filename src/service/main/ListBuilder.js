import { TimeUtil } from '../util/TimeUtil';
export class ListBuilder {
	constructor() {}
	build(list, filterHash) {
		const hashes = this.loadHash(filterHash);
		const retList = [];
		const map = {};
		const keylist = [];
		let index = 0;
		for (let row of list) {
			const path = row.url;
			const p = row.url.split('/');
			const fileName = p[p.length - 1];
			const file = row.file;
			const created = TimeUtil.unixTimeToDateFormat(row.created);
			const hex = row.hex;
			const start = TimeUtil.unixTimeToDateFormat(file.startTimestamp * 1000);
			const end = TimeUtil.unixTimeToDateFormat(file.endTimestamp * 1000);
			const count = file.keys.length;
			const key = JSON.stringify([start, end, created, hex]);
			keylist.push(key);
			map[key] = { path, created, hex, start, end, count, index, fileName };
		}
		keylist.sort();
		let lastStart = null;
		let lastEnd = null;
		for (let key of keylist) {
			const row = map[key];
			if (hashes.length > 0) {
				if (!hashes.includes(row.hex)) {
					continue;
				}
			}
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
			index++;

			row.index = index;
			retList.push(row);
		}
		return retList;
	}
	loadHash(filterHash) {
		const hashes = [];
		if (!filterHash) {
			return hashes;
		}
		try {
			const obj = JSON.parse(filterHash);
			if (Array.isArray(obj)) {
				for (let row of obj) {
					if (Array.isArray(row.Files)) {
						for (let file of row.Files) {
							if (file.MatchCount * 1 > 0 && file.Hash) {
								hashes.push(file.Hash);
							}
						}
					} else if (row.hash && row.MatchCount * 1 > 0) {
						hashes.push(row.Hash);
					}
				}
			}
		} catch (e) {
			console.log(e);
			return filterHash.split('\n');
		}
		return hashes;
	}
}
