import { F } from './util/Fetcher';
export class FileLoadService {
	constructor() {}
	static getFile(path, isText) {
		const f = async (resolve) => {
			const brob = await F.l(path, undefined, isText);
			const reader = new FileReader();
			reader.addEventListener(
				'load',
				() => {
					resolve(reader.result);
				},
				false
			);

			if (isText && brob) {
				resolve(brob);
			} else if (!isText && brob) {
				reader.readAsDataURL(brob);
			} else {
				resolve(null);
			}
		};
		return new Promise(f);
	}
}
