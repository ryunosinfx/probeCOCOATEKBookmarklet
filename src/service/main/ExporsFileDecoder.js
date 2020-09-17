import protobuf from 'protobufjs';
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
			const object = te.toObject(message, {
				longs: String,
				enums: String,
				bytes: String,
				// see ConversionOptions
			});
			return object;
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
