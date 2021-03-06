var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './output'),
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve(__dirname, './src'),
    extensions: ['', '.js', '.jsx', '.web.js',],
    alias: { }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: "style!css!less"},
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by amoblin'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  babel: {
    plugins: [
      ["import", [{
        libraryName: "antd-mobile",
        style: true
      },{
        libraryName: "antd",
        style: true
      }]]
    ],
  },
}
