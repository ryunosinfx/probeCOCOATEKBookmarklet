<template>
	<div id="main" class="v-application">
		<h1>covid19radar zip.file link</h1>
		<p v-on:click="test">click and download!</p>
		<ul>
			<li v-for="item in loadedData.list" :key="item.url">
				created:{{ new Date(item.created).toISOString() }}/{{ item.hex }} /{{ JSON.stringify(item.file) }}
				<button class="zipdllink" v-on:click="dl(item.url)">{{ item.url }} DL</button>
			</li>
		</ul>
		<a id="dlLinkAncker"></a>
	</div>
</template>

<script>
import { MainLogic } from './service/main/MainLogic';
export default {
	el: '#main',
	name: 'main',
	components: {},
	data() {
		return {
			greeting: 'Hello',
			loadedData: { list: [] },
		};
	},
	created() {
		this.main = new MainLogic();
	},
	async mounted() {
		const list = await this.main.getList();
		for (let row of list) {
			const data = this.main.get(row.url);
			row.file = row.file;
			row.hex = row.hex;
		}
		console.log('mounted list:' + typeof list);
		this.loadedData.list = list;
	},
	methods: {
		dl(url) {
			console.log('CCCCCCCCCCCCCCCCCCCCCCCurl:' + url);
			this.main.dl(url);
		},
		test(e) {
			alert('e:' + e);
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
</style>
