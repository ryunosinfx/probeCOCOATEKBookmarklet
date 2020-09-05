<template>
	<div id="main" class="v-application">
		<h1>covid19radar zip.file link</h1>
		<p>click and download!</p>
		<ul>
			<li v-for="item in loadedData.list" :key="item.url">
				created:{{ new Date(item.created).toISOString() }} <button class="zipdllink" v-on:click="dl(item.url)">{{ item.url }} DL</button>
			</li>
		</ul>
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
		console.log('mounted list:' + typeof list);
		this.loadedData.list = list;
	},
	methods: {
		dl(url) {
			return () => {
				alert(url);
				this.main.dl(url);
			};
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
