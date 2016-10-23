const { root } = require('../constants');

module.exports = {
  test: /\.html$/,
  loaders: ['raw'],
  include: root('src', 'app')
};
