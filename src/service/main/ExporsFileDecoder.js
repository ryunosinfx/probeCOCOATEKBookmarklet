import protobuf from 'protobufjs';
import { Base64Util } from '../util/Base64Util';
export class ExporsFileDecoder {
	async decode(u8a) {
		const header = u8a.slice(0, 16);
		const body = u8a.slice(16);
		const root = await this.loadProto();
		const te = root.lookupType('TemporaryExposureKeyExport');
		try {
			console.log(body);
			console.log('TemporaryExposureKeyExport:' + te);
			const message = te.decode(body);
			console.log(message);
			const obj = te.toObject(message, {
				longs: String,
				enums: String,
				bytes: String,
				// see ConversionOptions
			});
			if (obj.keys && Array.isArray(obj.keys)) {
				for (let key of obj.keys) {
					key.keyData = Base64Util.aToB64u(key.keyData);
				}
			}
			return obj;
		} catch (e) {
			console.warn(e);
			if (e instanceof protobuf.util.ProtocolError) {
				// e.instance holds the so far decoded message with missing required fields
			} else {
				// wire format is invalid
			}
		}
	}
	loadProto() {
		const f = (resolve) => {
			protobuf.load('dist/vendor/TemporaryExposureKeyExport.proto', (err, root) => {
				if (err) {
					throw err;
				}
				resolve(root);
			});
		};
		return new Promise(f);
	}
}
