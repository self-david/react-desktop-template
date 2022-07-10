const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = [
  {
    entry: './index.js',
    name: 'electron',
    target: 'electron-main',
    resolve: {
      extensions: ['*', '.js', '.json'],
    },
    output: {
      path: path.join(__dirname, '/build'),
      publicPath: '/',
      filename: 'app.js',
    },
    plugins: [],
  },
  {
    entry: './src/index.js',
    name: 'react',
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.css', '.svg'],
    },
    output: {
      path: path.join(__dirname, '/build'),
      publicPath: './',
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, '/build/'),
      compress: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
      }),
    ],
  },
]
