const { root } = require('../constants');

module.exports = {
  test: /\.(png|jpe?g|gif|ico)$/,
  loaders: ['url?limit=10000&name=[path][name].[ext]'],
  include: root('assets')
};
