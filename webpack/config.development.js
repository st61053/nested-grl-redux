const webpack = require('webpack');
const { merge } = require('webpack-merge');
const configBase = require('./config.base');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const VERSION = require('../package.json').version;
const PATHS = require('./constants');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'whatwg-fetch',
    path.join(PATHS.SRC_DIR, 'index.tsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(VERSION)
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join('index.html'),
      favicon: path.join(PATHS.IMG_DIR, 'icon.svg')
    }),
    new ESLintPlugin({
      exclude: PATHS.NODE_MODULES_DIR
    })
  ],
  devServer: {
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    port: 8080,
    client: {
      progress: true
    }
  }
};

module.exports = merge(configBase, config);
