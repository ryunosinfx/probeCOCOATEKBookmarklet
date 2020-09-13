import protobufjs from 'protobufjs';
const TemporaryExposureKeyExport = JSON.stringify({
	nested: {
		TemporaryExposureKeyExport: {
			fields: {
				start_timestamp: {
					type: 'fixed64',
					id: 1,
				},
				end_timestamp: {
					type: 'fixed64',
					id: 2,
				},
				region: {
					type: 'string',
					id: 3,
				},
				batch_num: {
					type: 'int32',
					id: 4,
				},
				batch_size: {
					type: 'int32',
					id: 5,
				},
				signature_infos: {
					type: 'SignatureInfo',
					id: 6,
				},
				keys: {
					type: 'TemporaryExposureKey',
					id: 7,
				},
				revised_keys: {
					type: 'TemporaryExposureKey',
					id: 8,
				},
			},
		},
	},
});

const root = protobuf.Root.fromJSON(TemporaryExposureKeyExport);
export class ExporsFileDecoder {
	decode(u8a) {
		/**
    message TemporaryExposureKeyExport {
    // Time window of keys in this batch based on arrival to server, in UTC seconds.
    optional fixed64 start_timestamp = 1;
    optional fixed64 end_timestamp = 2;
    // Region for which these keys came from, such as country.
    optional string region = 3;
    // For example, file 2 in batch size of 10. Ordinal, 1-based numbering.
    // Note: Not yet supported on iOS.
    optional int32 batch_num = 4;
    optional int32 batch_size = 5;
    // Information about associated signatures
    repeated SignatureInfo signature_infos = 6;
    // The TemporaryExposureKeys for initial release of keys.
    // Keys should be included in this list for initial release,
    // whereas revised or revoked keys should go in revised_keys.
    repeated TemporaryExposureKey keys = 7;
    // TemporaryExposureKeys that have changed status.
    // Keys should be included in this list if they have changed status
    // or have been revoked.
    repeated TemporaryExposureKey revised_keys = 8;
} 
*/
		const header = u8a.slice(0, 16);
		const body = u8a.slice(16);
		const TemporaryExposureKeyExport = root.lookup('TemporaryExposureKeyExport');
		try {
			const decodedMessage = TemporaryExposureKeyExport.decode(body.buffer);
			console.log(decodedMessage);
		} catch (e) {
			if (e instanceof protobuf.util.ProtocolError) {
				// e.instance holds the so far decoded message with missing required fields
			} else {
				// wire format is invalid
			}
		}
	}
}
