const webpack = require('webpack');
const merge = require('webpack-merge');
const configBase = require('./config.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VERSION = require('../package.json').version;
const PATHS = require('./constants');

const config = {
  mode: 'production',
  entry: {
    index: {
      import: path.join(PATHS.SRC_DIR, 'index.tsx')
    }
  },
  output: {
    path: PATHS.BUILD_DIR,
    filename: '[name]-bundle.js'
  },
  module: {
    rules: []
  },
  optimization: {
    runtimeChunk: "single",
    minimize: true,
    sideEffects: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.VERSION': JSON.stringify(VERSION)
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new HtmlWebpackPlugin({
      template: path.join('index.html'),
      favicon: path.join(PATHS.IMG_DIR, 'icon.svg'),
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
      }
    }),
    new ESLintPlugin({
      exclude: PATHS.NODE_MODULES_DIR
    })
  ]
};

module.exports = merge(configBase, config);
