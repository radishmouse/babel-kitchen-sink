
var path = require('path');
module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'webpack.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
