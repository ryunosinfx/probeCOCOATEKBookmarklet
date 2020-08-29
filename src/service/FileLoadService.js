import { F } from './util/Fetcher';
export class FileLoadService {
	constructor() {}
	static getFile(path) {
		const f = async (resolve) => {
			const brob = await F.l(path);
			const reader = new FileReader();
			reader.addEventListener(
				'load',
				() => {
					resolve(reader.result);
				},
				false
			);

			if (brob) {
				reader.readAsDataURL(brob);
			} else {
				resolve(null);
			}
		};
		return new Promise(f);
	}
}
