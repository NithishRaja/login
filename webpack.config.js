var path = require('path');

module.exports = {
  devServer: {
      inline: true,
      contentBase: './public',
      port: 8080
  },
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src/js/app.js'),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ['style', 'css', 'less']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
}
