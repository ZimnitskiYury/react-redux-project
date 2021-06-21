const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['babel-regenerator-runtime', './src/app/app.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              titleProp: true,
            },
          },
          'file-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(?:ico|png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images',
          name() {
            return '[name].[hash].[ext]';
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      Modules: path.resolve(__dirname, 'src/modules/'),
      Features: path.resolve(__dirname, 'src/features/'),
      Resources: path.resolve(__dirname, 'src/resources/'),
      Layout: path.resolve(__dirname, 'src/layout/'),
      State: path.resolve(__dirname, 'src/state/'),
      Services: path.resolve(__dirname, 'src/services/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
    },
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
