<template>
	<div>
		<h1>タイトルー</h1>
		<p>Hello, World!</p>
	</div>
</template>

<script>
import { MainLogic } from './service/main/MainLogic';
export default {
	components: {},
	data() {
		return {
			greeting: 'Hello',
		};
	},
	created() {
		this.main = new MainLogic();
	},
	mounted() {
		this.main.getList();
	},
	methods: {},
};
</script>

<style>
p {
	font-size: 2em;
	text-align: center;
}
</style>
