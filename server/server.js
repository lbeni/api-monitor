const express = require('express');
const app = express();

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfigDev = require('../webpack.config.dev.js');

const path = require('path');

app.use(express.static(path.resolve(__dirname, '../dist')));
//app.use(express.static(__dirname + '../dist'));

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfigDev);
  app.use(webpackDevMiddleware(compiler, {
    //hot: true,
    filename: 'app.js',
    publicPath: webpackConfigDev.output.publicPath,
    noInfo: false,
    stats: {
      colors: true,
    }
    //historyApiFallback: true,
  }));
  app.use(webpackHotMiddleware(compiler));
}

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
