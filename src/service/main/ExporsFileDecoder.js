import protobuf from 'protobufjs';
import { Base64Util } from '../util/Base64Util';
const data = {};
export class ExporsFileDecoder {
	constructor() {
		const f = async () => {
			if (!data.root) {
				data.root = await ExporsFileDecoder.loadProto();
			}
		};
		this.init = f();
	}
	async decode(u8a) {
		await this.init;
		// const header = u8a.slice(0, 16); //
		const body = u8a.slice(16);
		const te = data.root.lookupType('TemporaryExposureKeyExport');
		try {
			console.log(body);
			console.log('TemporaryExposureKeyExport:' + te);
			const message = te.decode(body);
			const obj = te.toObject(message, {
				longs: String,
				enums: String,
				bytes: String,
				// see ConversionOptions
			});
			console.log('ExporsFileDecoder decode obj');
			console.log(obj);
			if (obj.keys && Array.isArray(obj.keys)) {
				for (let key of obj.keys) {
					// console.log(key.keyData);
					key.keyData = key.keyData && typeof key.keyData === 'string' ? key.keyData : Base64Util.aToB64u(key.keyData);
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
	static loadProto() {
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
