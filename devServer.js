const path = require('path');
const express = require('express');
const app = express();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');

app.use(webpackDevMiddleware(
  webpack(webpackConfig), {
    noInfo: true,
    // historyApiFallback: true,
    // hot: true,
    stats: {
      colors: true,
    },
  })
);

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

app.listen(port, host, err => err
  ? console.log('Server Error:', err)
  : console.log(`Dev Server listening on port ${port}`)
);
