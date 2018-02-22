const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
    ],
    extensions: [
      '.js',
      '.jsx'
    ],
  }, 
  module: {
        rules: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      importLoaders: 1,
                      localIdentName: '[name]__[local]___[hash:base64:5]',
                    },
                }
              ],
              publicPath: '/', 
            })
          },
          {
            test: /\.(jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
          {
            test: /\.(png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
              mimetype: 'image/png',
              name: 'img/[name].[ext]',
            },
          }, 
        ]
      },
  plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          inject: 'body', 
        }),
        new ExtractTextPlugin('styles.css')
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};