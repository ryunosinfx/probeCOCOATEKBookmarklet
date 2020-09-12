import { Base64Util } from '../util/Base64Util';
// const Zlib = require('../../../vendor/unzip.min');
const Zlib = globalThis.Zlib;
export class ZipDecoder {
	static decode(dURI) {
		const ab = Base64Util.dataURI2bs(dURI);
		const retObj = {};
		console.log('ZipDecoder decode -A-');
		console.log(ab);
		try {
			console.log('ZipDecoder decode -B-');
			const u8a = new Uint8Array(ab);
			const unzip = new Zlib.Unzip(u8a);
			const importFileList = unzip.getFilenames();
			console.log('ZipDecoder decode -C-');
			console.log(importFileList);

			for (let filePath of importFileList) {
				const bs = Base64Util.u8a2bs(unzip.decompress(filePath));
				retObj[filePath] = bs;
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
