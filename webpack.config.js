const path = require('path');
const { root, getNodeDependencies } = require('./webpack/utils');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'eval',
  entry: {
    app: root('src', 'main'),
    vendor: getNodeDependencies([
      /^\@angular\//,
      /^core\-js/
    ]),
  },
  output: {
    path: root('dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/',
  },
  resolve: { extensions: ['.ts', '.js', '.json', '.html', '.css'] },
  module: { rules: require('./webpack/loaders') },
  plugins: require('./webpack/plugins'),
};
