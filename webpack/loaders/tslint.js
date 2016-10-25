const { root } = require('../utils');

module.exports = {
  test: /\.ts$/,
  loaders: ['tslint'],
  include: root('src'),
  enforce: 'pre'
};
