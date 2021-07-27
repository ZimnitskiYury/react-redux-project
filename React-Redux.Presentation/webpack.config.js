const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
// Webpack Analyzer
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = (
  env, argv,
) => {
  let isDev = false;

  if (argv.mode === 'development') {
    isDev = true;
  }

  return {
    entry: [
      'babel-regenerator-runtime',
      './src/app/app.jsx',
    ],
    output: {
      path: path.join(
        __dirname,
        'dist',
      ),
      filename: 'bundle.[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: [
              '.js',
              '.jsx',
            ],
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
            (isDev
              ? 'style-loader'
              : MiniCssExtractPlugin.loader),
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: { plugins: () => [postcssPresetEnv()] },
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
    optimization: {
      runtimeChunk: {
        name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
      },
      minimize: !isDev,
      minimizer: [new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
        parallel: true,
      })],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
          node_vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'node_vendors',
            chunks: 'all',
          },
        },
      },
    },
    devtool: isDev
      ? 'inline-source-map'
      : false,
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/resources/images/beer-keg.png',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new StylelintPlugin({
        fix: true,
      }),
      new WebpackBundleAnalyzer(),
      new MomentLocalesPlugin({
        localesToKeep: [
          'es-us',
          'ru',
        ],
      }),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        algorithm: 'gzip',
      }),
    ],
  };
};
