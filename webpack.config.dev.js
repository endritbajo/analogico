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
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
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
}
