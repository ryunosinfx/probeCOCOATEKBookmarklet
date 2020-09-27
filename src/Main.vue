<template>
	<v-app id="main" class="v-application">
		<v-app-bar app dark height="40"> <h1>covid19radar zip.file link</h1></v-app-bar>
		<v-main>
			<v-toolbar color="cyan" dark flat>
				<v-app-bar-nav-icon></v-app-bar-nav-icon>

				<v-toolbar-title>covid19radar zip.file link</v-toolbar-title>

				<v-spacer></v-spacer>

				<v-btn icon>
					<v-icon>mdi-magnify</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>

				<template v-slot:extension>
					<v-tabs v-model="tab" align-with-title>
						<v-tabs-slider color="yellow"></v-tabs-slider>

						<v-tab v-for="item in items" :key="item">
							{{ item }}
						</v-tab>
					</v-tabs>
				</template>
			</v-toolbar>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<v-card flat class="d-block pa-2 deep-purple accent-4 white--text">
						<v-row class="mb-6" no-gutters>
							<v-col md="5">
								<v-textarea auto-grow="true" label="select Hash" clearable clear-icon="mdi-close-circle" v-model="hash"></v-textarea>
							</v-col>
							<v-col md="1">
								<v-btn class="" v-on:click="select">select</v-btn>
								<v-btn class="" v-on:click="clear">clear</v-btn>
							</v-col>
						</v-row>
						<table class="test">
							<thead>
								<th>No.</th>
								<th>START</th>
								<th>END</th>
								<th>hash</th>
								<th>TEK</th>
								<th>url</th>
								<th>created</th>
							</thead>
							<tbody>
								<tr v-for="item in loadedData.tlist" :key="item.path">
									<td>{{ item.index }}</td>
									<td>{{ item.start }}</td>
									<td>{{ item.end }}</td>
									<td>{{ item.hex }}</td>
									<td>{{ item.count }}</td>
									<td>
										<button class="zipdllink" v-on:click="dl(item.path)">{{ item.fileName }} DL</button>
									</td>
									<td>{{ item.created }}</td>
								</tr>
							</tbody>
						</table>
					</v-card>
				</v-tab-item>
				<v-tab-item>
					<v-card class="d-block pa-2 black accent-4 white--text">
						<ul>
							<li v-for="item in loadedData.list" :key="item.url">
								created:{{ new Date(item.created).toISOString() }}/{{ item.hex }} /{{ JSON.stringify(item.file) }}
								<button class="zipdllink" v-on:click="dl(item.url)">{{ item.url }} DL</button>
							</li>
						</ul>
						<a id="dlLinkAncker"></a>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-main>
		<v-footer app>
			<!-- -->
		</v-footer>
		<v-overlay :value="overlay">
			<v-progress-circular indeterminate size="64"></v-progress-circular>
		</v-overlay>
	</v-app>
</template>

<script>
// retList.push({ path, created, hex, start, end, count, index });
import { MainLogic } from './service/main/MainLogic';
export default {
	el: '#main',
	name: 'main',
	components: {},
	data() {
		return {
			greeting: 'Hello',
			loadedData: { list: [] },
			tab: null,
			items: ['list', 'detail'],
			hash: null,
			overlay: false,
		};
	},
	created() {
		this.main = new MainLogic();
	},
	async mounted() {
		this.overlay = true;
		const list = await this.main.getList();
		for (let row of list) {
			const data = this.main.get(row.url);
			row.file = row.file;
			row.hex = row.hex;
		}

		this.loadedData.tlist = this.main.convert(list);
		console.log('mounted list:' + typeof list);
		this.loadedData.list = list;
		this.overlay = false;
	},
	methods: {
		dl(url) {
			console.log('CCCCCCCCCCCCCCCCCCCCCCCurl:' + url);
			this.main.dl(url);
		},
		test(e) {
			alert('e:' + e);
		},
		select() {
			this.loadedData.tlist = this.main.convert(this.loadedData.list, this.hash);
		},
		clear() {
			this.loadedData.tlist = this.main.convert(this.loadedData.list);
		},
	},
};
</script>

<style>
p {
	font-size: 2em;
	text-align: center;
}
.zipdllink {
	cursor: pointer;
	color: blue;
	text-decoration: underline;
}
table.test {
	background-color: burlywood;
}
</style>
