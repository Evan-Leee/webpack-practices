const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		print: './print.js',
		index: './index.js',
		vendor: ['lodash'] //also need to use commonsChunkPlugin
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'assets')
	},
	plugins: [
		new HtmlWebpackPlugin({ title: 'Caching' }),
		new webpack.optimize.CommonsChunkPlugin({
        	name: ['vendor', 'runtime']// order 
	    })
	]
}

//content change caused the hash changed
