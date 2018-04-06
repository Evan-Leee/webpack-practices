const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		print: './print.js',
		index: './index.js',
		vendor: ['lodash']
	},
	output: {
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, 'assets')
	},
	plugins: [
		new HtmlWebpackPlugin({
        	title: 'Caching'
      })
	]
}
