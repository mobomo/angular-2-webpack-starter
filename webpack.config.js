const path = require('path');
const { ContextReplacementPlugin, DefinePlugin } = require('webpack');

const development = process.env.NODE_ENV === 'development';
const production = process.env.NODE_ENV === 'production';

function root(...args) {
  return path.resolve(__dirname, ...args);
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: root('src', 'index'),
  output: {
    path: root('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['tslint'], include: root('src'), enforce: 'pre' },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      { test: /\.html$/, loaders: ['raw'], include: root('src') },
      { test: /\.css$/, loaders: ['raw'], include: root('src') },
    ],
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    new DefinePlugin({
      __DEV__: development,
    }),
    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('src')
    ),
  ],
};
