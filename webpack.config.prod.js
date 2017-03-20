const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: [ './index.js', './index.html' ],

  output: {
    filename: "index.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          combineLoaders([{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }])
        )
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=fonts/[name].[ext]'
      },
      {
          test: /\.(wav|mp3)$/,
          loader: 'file?name=audio/[name].[ext]'
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  ],
  
  resolve: {
    root: path.resolve(__dirname + '/src'),
    extensions: ['', '.js']
  }
}
