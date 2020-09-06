import { V } from './V';
const v = V.gi();
export class FileDLHelper {
	static dl(fileName, blob, contentType = 'application/octetstream') {
		const dlLink = v.c('a');
		dlLink.download = fileName;
		dlLink.href = URL.createObjectURL(blob, { type: contentType });
		v.a(v.b, dlLink);
		// dlLink.dataset.downloadurl = [contentType, fileName, dlLink.href].join(':');
		dlLink.click();
		setTimeout(() => {
			URL.revokeObjectURL(dlLink.href);
			v.re(dlLink);
		}, 1000);
	}
}
