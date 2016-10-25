const { root } = require('../utils');

module.exports = {
  test: /\.ts$/,
  loaders: ['awesome-typescript-loader'],
  include: root('src'),
};
