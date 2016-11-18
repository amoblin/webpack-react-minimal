var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, '.'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by amoblin')
  ]
}
