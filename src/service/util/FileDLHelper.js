import { V } from './V';
const v = V.gi();
export class FileDLHelper {
	static dl(fileName, blob, contentType = 'application/octetstream', isDataScheme) {
		console.log('FileDLHelper dl fileName:' + fileName);
		const dlLink = v.c('a');
		console.log('FileDLHelper dl dlLink:' + dlLink);
		console.log(dlLink);
		console.log(blob);
		dlLink.download = fileName;
		console.log('FileDLHelper dl dlLink.download:' + dlLink.download);
		dlLink.href = isDataScheme ? blob : URL.createObjectURL(blob, { type: contentType });
		console.log('FileDLHelper dl dlLink.href:' + dlLink.href);
		v.a(v.b, dlLink);
		console.log('FileDLHelper dl dlLink.parentNode:' + dlLink.parentNode);
		// dlLink.dataset.downloadurl = [contentType, fileName, dlLink.href].join(':');
		dlLink.click();
		console.log('FileDLHelper dl dlLink.parentNode:' + dlLink.parentNode);
		setTimeout(() => {
			console.log('FileDLHelper dl remove!');
			URL.revokeObjectURL(dlLink.href);
			v.re(dlLink);
		}, 1000);
	}
}
