const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}

// `../../node_modules/.bin/webpack --config webpack.config.js`