// @ts-check
const path = require('path');
const PATHS = require('./constants');

const configBase = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      PATHS.SRC_DIR,
      PATHS.NODE_MODULES_DIR
    ],
    alias: {
      sharedImages: path.resolve(__dirname, '../img/'),
    }
  },
  target: 'web'
};

module.exports = configBase;
