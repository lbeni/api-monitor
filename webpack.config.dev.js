const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //context: path.join(__dirname, 'src'),
  entry: [
    //polyfills
    'react-hot-loader/patch',
    './client/main.js'
  ],
  output: {
    filename: 'app.js',
    //path: __dirname,
    path: path.join(__dirname, 'dist/'),
    publicPath: 'http://0.0.0.0:3000/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'client')
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    inject: false,
    template: require('html-webpack-template'),
    title: 'Api Monitor',
    appMountId: 'app'
    //devServer: 'http://localhost:3000',
  })]
};
