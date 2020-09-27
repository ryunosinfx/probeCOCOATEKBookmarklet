import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';

import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons/iconfont/material-icons.css';

Vue.use(Vuetify);

const opts = {
	theme: {
		themes: {
			dark: true,
			light: {
				primary: '#673ab7',
				secondary: '#3f51b5',
				accent: '#2196f3',
				error: '#e91e63',
				warning: '#607d8b',
				info: '#4caf50',
				success: '#8bc34a',
			},
		},
	},
};
console.log('opts:' + opts);
export default new Vuetify(opts);
