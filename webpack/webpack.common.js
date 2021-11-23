const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  mode: 'development',
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '..', 'src'),
      path.resolve(__dirname, '..', 'test'),
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.module\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/index.html'),
    }),
    new DotenvWebpackPlugin({
      silent: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'src/assets'),
          to: path.resolve(__dirname, '..', 'build/assets'),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
}
