const { root } = require('../utils');

module.exports = [
  {
    test: /\.woff(?:\?[\d\w-\.=]+)?$/,
    loaders: ['url?limit=10000&mimetype=application/font-woff'],
    include: root('src', 'assets', 'fonts'),
  },
  {
    test: /\.woff2?(?:\?[\d\w-\.=]+)?$/,
    loaders: ['url?limit=10000&mimetype=application/font-woff2'],
    include: root('src', 'assets', 'fonts'),
  },
  {
    test: /\.eot(?:\?[\d\w-\.=]+)?$/,
    loaders: ['url?limit=10000&mimetype=application/vnd.ms-fontobject'],
    include: root('src', 'assets', 'fonts'),
  },
  {
    test: /\.[ot]tf(?:\?[\d\w-\.=]+)?$/,
    loaders: ['url?limit=10000&mimetype=application/octet-stream'],
    include: root('src', 'assets', 'fonts'),
  },
  {
    test: /\.svg(?:\?[\d\w-\.=]+)?$/,
    loaders: ['url?limit=10000&mimetype=img/svg+xml'],
    include: root('src', 'assets', 'fonts'),
  },
];
