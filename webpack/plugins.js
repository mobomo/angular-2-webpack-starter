const { root } = require('./utils');
const {
  ContextReplacementPlugin,
  DefinePlugin,
  optimize: {
    CommonsChunkPlugin,
    UglifyJsPlugin,
  },
} = require('webpack');

function getPlugins(environment) {
  const base = [
    new DefinePlugin({
      __DEV__: environment === 'development',
      __PROD__: environment === 'production',
      __TEST__: JSON.stringify(process.env.TEST || false),
      'process.env.NODE_ENV': JSON.stringify(environment),
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
    new UglifyJsPlugin(),
    new CommonsChunkPlugin({ name: 'vendor', }),
  ];

  if (environment === 'development' && dev.length) return [...base, ...dev];
  if (environment === 'production' && prod.length) return [...base, ...prod];
  console.log('!!!returning just base plugins for webpack!!!');
  // TODO: return appropriate plugins for test environment, if any
  return base; // TODO: handle unknown NODE_ENV here
};

module.exports = getPlugins(process.env.NODE_ENV);
