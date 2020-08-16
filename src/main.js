import Vue from 'vue';

import App from './Main';

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
	el: '#' + targetId, // アプリをマウントする要素(セレクタで指定)
	components: { App }, // Appというコンポーネントを使うよ、という宣言
	template: '<app/>', // el(今回は#app)の中に表示する内容
});
