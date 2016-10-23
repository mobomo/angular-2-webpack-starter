const { root } = require('../constants');

module.exports = {
  test: /\.ts$/,
  loaders: ['awesome-typescript-loader'],
  include: root('src'),
};
