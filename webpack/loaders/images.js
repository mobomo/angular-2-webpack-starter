const { root } = require('../utils');

module.exports = {
  test: /\.(png|jpe?g|gif|ico)$/,
  loaders: ['url?limit=10000'],
  include: root('src', 'assets')
};
