const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');

 
module.exports = {
	mode: 'development', // production
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'assets/js'),
		filename: 'scripts.js'
	},
	module: {
		rules: [
			{
				test:/\.(s*)css$/,
				use: [
					miniCss.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: '../img/[name][ext]'
				}
			}
		]
	},
	optimization: {
		minimizer: [
			new minify({})
		],
	},
	plugins: [
		new miniCss({
			filename: '../css/style.css',
		}),
	]
};