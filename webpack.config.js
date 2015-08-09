var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './lib/app.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
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
        loader: 'babel-loader!awesome-typescript-loader?compiler=ntypescript&module=common&emitRequireType=false&jsx=react'
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
