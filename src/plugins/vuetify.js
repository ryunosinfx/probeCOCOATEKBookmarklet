import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
	theme: {
		themes: {
			light: {
				primary: colors.red.darken1, // #E53935
				secondary: colors.red.lighten4, // #FFCDD2
				accent: colors.indigo.base, // #3F51B5
			},
		},
	},
};

export default new Vuetify(opts);
