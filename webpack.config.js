const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: 'index.html',
  inject: 'body',
});

const config = {
  entry: './app/index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};

module.exports = config;
