import { Base64Util } from '../util/Base64Util';
// const Zlib = require('../../../vendor/unzip.min');
const Zlib = globalThis.Zlib;
export class ZipDecoder {
	static decode(dURI) {
		console.log('ZipDecoder decode -0-dURI:' + dURI);
		const bs = Base64Util.dataURI2bs(dURI);
		const u8a = Base64Util.bs2u8a(bs);
		const retObj = {};
		console.log('ZipDecoder decode -A-');
		console.log(u8a);
		try {
			console.log('ZipDecoder decode -B-');
			const unzip = new Zlib.Unzip(u8a);
			const importFileList = unzip.getFilenames();
			console.log('ZipDecoder decode -C-');
			console.log(importFileList);

			for (let filePath of importFileList) {
				const bs = Base64Util.u8a2bs(unzip.decompress(filePath));
				const us = Base64Util.s2u(bs);
				retObj[filePath] = us;
			}
			console.log('ZipDecoder decode -D-');
		} catch (e) {
			console.warn(e.message);
		}
		console.log('ZipDecoder retObj');
		console.log(retObj);
		console.log('ZipDecoder decode -E-');
		return retObj;
	}
}
