var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './lib/js/app.ts'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },
    {
        test: /\.tsx$/,
        loader: 'babel-loader!awesome-typescript-loader?compiler=ntypescript&module=common&jsx=react'
    },
    {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader?compiler=ntypescript&module=common&emitRequireType=false&jsx=react'
    },
    { // Turn off AMD module loading on eventemitter2
        test: /eventemitter2/,
        loader: 'imports?define=>false'
    }]
  }
};
