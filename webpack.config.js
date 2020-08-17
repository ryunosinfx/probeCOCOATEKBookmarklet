const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	//  context: __dirname,
	entry: {
		bundle: './src/main.js',
		test: ['./test/main.test.js'],
	},
	output: {
		// 出力するファイル名
		filename: '[name].js',
		// 出力先のパス
		path: __dirname + '/dist',
		//publicPath: __dirname + "/dest/js",
		publicPath: './',
		globalObject: 'this',
	},
	module: {
		rules: [
			// {
			// 	test: /\.css$/,
			// 	loader: 'style-loader!css-loader?importLoaders=1&camelCase',
			// },
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader'],
			},
			{
				test: /test\.js$/,
				use: {
					loader: 'mocha-loader',
					options: {},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.s(c|a)ss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						// Requires sass-loader@^7.0.0
						options: {
							implementation: require('sass'),
							fiber: require('fibers'),
							indentedSyntax: true, // optional
						},
						// Requires sass-loader@^8.0.0
						options: {
							implementation: require('sass'),
							sassOptions: {
								fiber: require('fibers'),
								indentedSyntax: true, // optional
							},
						},
					},
				],
			},
		],
	},
	devServer: {
		publicPath: '/',
		contentBase: __dirname + '/',
		watchContentBase: true,
		port: 8088,
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			// test: /\.xxx$/,  may apply this only for some modules
			options: {
				html: './index.html',
			},
		}),
		new VueLoaderPlugin(),

		new HtmlWebpackPlugin({
			filename: 'testmocha.html',
			inject: 'body',
			chunks: ['test'],
		}),
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
	},
};
