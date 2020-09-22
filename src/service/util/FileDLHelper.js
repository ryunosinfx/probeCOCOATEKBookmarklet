import { V } from './V';
const v = V.gi();
export class FileDLHelper {
	static dl(fileName, blob, contentType = 'application/octetstream', isDataScheme) {
		const d = v.gid('dlLinkAncker');
		d.download = fileName;
		d.href = isDataScheme ? blob : URL.createObjectURL(blob, { type: contentType });
		d.click();
		setTimeout(() => {
			URL.revokeObjectURL(d.href);
		}, 1000);
	}
}
