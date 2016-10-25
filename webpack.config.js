const path = require('path');
const { root } = require('./webpack/utils');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: root('src', 'main'),
  output: { path: root('dist'), filename: 'bundle.js' },
  resolve: { extensions: ['.ts', '.js', '.json', '.html', '.css'] },
  module: { rules: require('./webpack/loaders') },
  plugins: require('./webpack/plugins'),
};
