const { root } = require('../utils');

module.exports = {
  test: /\.html$/,
  loaders: ['raw'],
  include: root('src', 'app')
};
