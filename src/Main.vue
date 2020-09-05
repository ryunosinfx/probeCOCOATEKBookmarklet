<template>
	<div>
		<h1>covid19radar zip.file link</h1>
		<p>click and download!</p>
		<ul>
			<li v-for="item in loadedData.list" :key="item.url">
				created:{{ item.created }} <span class="btn" v-on:click="dl(url)">{{ item.url }} DL</span>
			</li>
		</ul>
	</div>
</template>

<script>
import { MainLogic } from './service/main/MainLogic';
export default {
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
span.btn {
	cursor: pointer;
}
</style>
