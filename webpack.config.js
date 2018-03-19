const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/frontend.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, 
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: './public',
    hot: true
  },
  mode: 'development'
}
