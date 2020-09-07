import { F } from './util/Fetcher';
export class FileLoadService {
	constructor() {}
	static getFile(path, isText) {
		const f = async (resolve) => {
			const brob = await F.l(path, undefined, isText);
			const fr = new FileReader();
			fr.addEventListener(
				'load',
				() => {
					console.log('FileLoadService a');
					const b64d = fr.result;
					resolve(b64d);
					console.log(b64d);
				},
				false
			);

			if (isText && brob) {
				console.log('FileLoadService b isText:' + isText);
				resolve(brob);
			} else if (!isText && brob) {
				console.log('FileLoadService c isText:' + isText);
				fr.readAsDataURL(brob);
			} else {
				console.log('FileLoadService null');
				resolve(null);
			}
		};
		return new Promise(f);
	}
}
