var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: ['./app/frontend/javascripts/main.js'],
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  resolve: {
    extensions: ['.jsx','.js']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, loader: 'style-loader!css-loader'
      }
    ]
  }
};