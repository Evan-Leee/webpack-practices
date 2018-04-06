const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
	entry: {
		index: './index.js',
		print: './print.js',
		vendor: ['lodash']
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		// noParse: /lodash/,
		rules: [
			{
				test: /.(jsx|js)$/,
				loader: 'babel-loader',
				// include: path.resolve(__dirname, "src/6-optimize"), //use the loader in some necessary module
				exclude: /node_modules/,
				options:{
					presets: ['env']
				}
			}
		]
	},
	plugins: [
		new UglifyJSPlugin(),
		new HtmlWebpackPlugin({ title: 'Optimize' }),
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'runtime'] 
		}),
		// new webpack.ProvidePlugin({
		// 	_ : 'lodash',
		// 	// $: 'jquery',
    // }),
	],
	// performance: {
	// 	hints: 'error',
	// 	maxEntrypointSize: 400000,
	// 	maxAssetSize: 100000,
	// }
}


//loader & plugin need time to start, it's also a part to optimize