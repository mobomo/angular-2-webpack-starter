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
    extensions: ['.ts', '.js', '.json', '.html', '.css'],
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['tslint'], include: root('src'), enforce: 'pre' },
      { test: /\.ts$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/ },
      { test: /\.html$/, loaders: ['raw'], include: root('src', 'app') },
      { test: /\.css$/, loaders: ['to-string', 'css'], include: [root('src', 'app'), root('assets')] },
      { test: /\.(png|jpe?g|gif|ico)$/, loaders: ['url?limit=10000&name=[path][name].[ext]'], include: root('assets') },
      { test: /\.woff(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=application/font-woff'], include: root('assets', 'fonts') },
      { test: /\.woff2(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=application/font-woff2'], include: root('assets', 'fonts') },
      { test: /\.eot(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=application/vnd.ms-fontobject'], include: root('assets', 'fonts') },
      { test: /\.[ot]tf(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=application/octet-stream'], include: root('assets', 'fonts') },
      { test: /\.svg(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=img/svg+xml'], include: root('assets', 'fonts') },
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
