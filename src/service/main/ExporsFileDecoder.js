import protobuf from 'protobufjs';
const jsonDescriptor = JSON.stringify({
	syntax: 'proto2',
	package: 'a',
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
// const Root = protobuf.Root,
// 	Type = protobuf.Type,
// 	Field = protobuf.Field;

// const si = new Type('SignatureInfo');
// teke.add(new Field('start_timestamp', 1, 'fixed64'));
// const root = new Root().define('a').add(si);
// const teke = new Type('TemporaryExposureKeyExport');
// teke.add(new Field('start_timestamp', 1, 'fixed64'));
// teke.add(new Field('end_timestamp', 2, 'fixed64'));
// teke.add(new Field('region', 3, 'region'));
// teke.add(new Field('batch_num', 4, 'int32'));
// teke.add(new Field('batch_size', 5, 'int32'));
// teke.add(new Field('signature_infos', 6, 'SignatureInfo'));
// teke.add(new Field('keys', 5, 'TemporaryExposureKey'));
// teke.add(new Field('revised_keys', 5, 'TemporaryExposureKey'));
// const root = new Root().define('a').add(teke);
// const root = protobuf.Root.fromJSON(jsonDescriptor);
export class ExporsFileDecoder {
	async decode(u8a) {
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
message SignatureInfo {
  // The first two fields have been deprecated
  reserved 1, 2;
  reserved "app_bundle_id", "android_package";
  // Key version for rollovers
  // Must be in character class [a-zA-Z0-9_]. For example, 'v1'
  optional string verification_key_version = 3;
  // Alias with which to identify public key to be used for verification
  // Must be in character class [a-zA-Z0-9_.]
  // For cross-compatibility with Apple, you can use your region's three-digit
  // mobile country code (MCC). If your region has more than one MCC, choose the
  // one that Apple has configured.
  optional string verification_key_id = 4;
  // ASN.1 OID for Algorithm Identifier. For example, `1.2.840.10045.4.3.2'
  optional string signature_algorithm = 5;
}
message TemporaryExposureKey {
  // Key of infected user
  optional bytes key_data = 1;
  // Varying risk associated with a key depending on diagnosis method
  optional int32 transmission_risk_level = 2 [deprecated = true];
  // The interval number since epoch for which a key starts
  optional int32 rolling_start_interval_number = 3;
  // Increments of 10 minutes describing how long a key is valid
  optional int32 rolling_period = 4
  [default = 144]; // defaults to 24 hours
  // Data type representing why this key was published.
  enum ReportType {
    UNKNOWN = 0;  // Never returned by the client API.
    CONFIRMED_TEST = 1;
    CONFIRMED_CLINICAL_DIAGNOSIS = 2;
    SELF_REPORT = 3;
    RECURSIVE = 4;  // Reserved for future use.
    REVOKED = 5;  // Used to revoke a key, never returned by client API.
  }

  // Type of diagnosis associated with a key.
  optional ReportType report_type = 5;

  // Number of days elapsed between symptom onset and the TEK being used.
  // E.g. 2 means TEK is 2 days after onset of symptoms.
  optional sint32 days_since_onset_of_symptoms = 6;
}
*/
		const header = u8a.slice(0, 16);
		const body = u8a.slice(16);
		const root = await this.test();
		const te = root.lookupType('a.TemporaryExposureKeyExport');
		try {
			console.log(body);
			console.log('a.TemporaryExposureKeyExport:' + te);
			const message = te.decode(body.buffer);
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
	test() {
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
