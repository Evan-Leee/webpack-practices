const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const hashedChunkIdPlugin = require('webpack-hashed-chunk-id-plugin')

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
		new webpack.HashedModuleIdsPlugin(),
		new hashedChunkIdPlugin({length: 8}),
		// new webpack.NamedModulesPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
        	name: ['vendor', 'runtime']// order 
		})
		// new CleanWebpackPlugin(['assets'])
	],
}