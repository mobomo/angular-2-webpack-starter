const { root } = require('../utils');

module.exports = {
  test: /\.css$/,
  loaders: ['to-string', 'css'],
  include: [root('src', 'app'), root('src', 'assets')]
};
