
const path = require('path');

module.exports = {
  entry: "./assets/js/app.js",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: 'development',
  optimization: {
    minimize: true
  },

}