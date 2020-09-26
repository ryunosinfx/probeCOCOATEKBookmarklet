<template>
	<div id="main" class="v-application">
		<h1>covid19radar zip.file link</h1>
		<p v-on:click="test">click and download!</p>
		<table>
			<thead>
				<th>index</th>
				<th>START</th>
				<th>END</th>
				<th>hash</th>
				<th>Count</th>
				<th>file</th>
				<th>created</th>
			</thead>
			<tbody>
				<tr v-for="item in loadedData.tlist" :key="item.path">
					<td>item.index</td>
					<td>item.start</td>
					<td>item.end</td>
					<td>item.hex</td>
					<td>item.count</td>
					<td>item.path</td>
					<td>item.created</td>
				</tr>
			</tbody>
		</table>
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

		this.loadedData.tlist = this.main.convert(list);
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
