const { root } = require('../constants');

module.exports = {
  test: /\.ts$/,
  loaders: ['tslint'],
  include: root('src'),
  enforce: 'pre'
};
