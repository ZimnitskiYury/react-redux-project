const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {
  let isDev = false;
  if (argv.mode === 'development') {
    isDev = true;
  }
  return {
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
            (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isDev ? '[local]' : '[sha1:hash:hex:4]',
                },
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
        Common: path.resolve(__dirname, 'src/common/'),
        Modules: path.resolve(__dirname, 'src/modules/'),
        Features: path.resolve(__dirname, 'src/features/'),
        Resources: path.resolve(__dirname, 'src/resources/'),
        Layout: path.resolve(__dirname, 'src/layout/'),
        State: path.resolve(__dirname, 'src/state/'),
        Services: path.resolve(__dirname, 'src/services/'),
        Styles: path.resolve(__dirname, 'src/styles/'),
      },
    },
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/resources/images/beer-keg.png',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
    ],
  };
};
