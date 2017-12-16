'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')

let webpack = require('webpack')
let path = require('path')
let fs = require('fs')
let _ = require('lodash')

let distPath = path.resolve(__dirname, '..', 'dist')
let modules_path = path.resolve(distPath, 'node_modules')

module.exports = {
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: true,
    __dirname: true
  },

  entry: ['./app.js'],

  output: {
    path: distPath,
    filename: 'server.js'
  },

  externals: {
    '../config.js': 'commonjs ./config.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      WEBPACK_BUNDLE: true,
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '..', 'public'),
      to: path.resolve(distPath, 'public')
    }])
  ]
}
