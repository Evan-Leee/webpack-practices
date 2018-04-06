const path = require('path');
module.exports = {
  entry: {
    index: './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
    // publicPath: 'http://localhost:4050/'
  },
  module: {
    rules: [
      {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, "white-list")
          ],
          // exclude: [
          //   path.resolve(__dirname, "black-list")
          // ],
            loader: "babel-loader",
            options: {
              presets: ["react"]
            },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}
