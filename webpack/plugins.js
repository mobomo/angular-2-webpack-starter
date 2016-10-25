const { root } = require('./utils');
const { ContextReplacementPlugin, DefinePlugin } = require('webpack');

function getPlugins(environment) {
  const base = [
    new DefinePlugin({
      __DEV__: environment === 'development',
      __PRODUCTION__: environment === 'production',
      __TEST__: environment === 'test',
    }),
    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('src')
    ),
  ];
  const dev = [
    // new HotModuleReplacementPlugin(),
  ];
  const prod = [
    // uglify, cssnano, etc
  ];

  if (environment === 'development' && dev.length) return [...base, ...dev];
  if (environment === 'production' && prod.length) return [...base, ...prod];
  // TODO: return appropriate plugins for test environment, if any
  return base; // TODO: handle unknown NODE_ENV here
};

module.exports = getPlugins(process.env.NODE_ENV);
