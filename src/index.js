import { V } from './service/util/V';
import { CSS } from './service/util/CSS';
const build = () => {
	const v = new V();
	const css = new CSS();
	v.a(v.b, v.h1('にゃーん', 'title'));
	v.a(v.b, v.br());
	v.a(v.b, v.hr('にゃーん', 'title'));
	css.add('.title', { color: 'red' });
	css.finish();
	alert('here we are!!!' + v.b);
};
build();
