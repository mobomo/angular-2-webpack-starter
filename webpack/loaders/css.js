const { root } = require('../constants');

module.exports = {
  test: /\.css$/,
  loaders: ['to-string', 'css'],
  include: [root('src', 'app'), root('assets')]
};
