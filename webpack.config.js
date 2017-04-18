'use strict'

var webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
          loaders: ["style-loader","css-loader","sass-loader"],
          test: /\.scss$/
      }
    ]
  }
}
