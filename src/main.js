import Vue from 'vue';
import vuetify from './plugins/vuetify';
import { BookmarkletBasePage } from './BookmarkletBasePage';
import App from './Main';

(async () => {
	const wp = window.parent;
	console.log('wp');
	console.log(wp);
	// alert(wp === window);
	if (!wp || wp === window) {
		await BookmarkletBasePage.main();
		return;
	}
	const targetId = 'app' + Date.now();
	const d = globalThis.document;
	const body = d.getElementsByTagName('body')[0];
	for (let child of body.children) {
		child.style.display = 'none';
	}
	if (!d.getElementById(targetId)) {
		const appDom = d.createElement('div');
		appDom.setAttribute('id', targetId);
		body.appendChild(appDom);
	}
	new Vue({
		el: '#' + targetId,
		components: { App },
		template: '<app/>',
		vuetify,
	});
})();
