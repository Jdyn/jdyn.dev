/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function (_env) {
  const isProduction = process.env.NODE_ENV === 'production';
  console.log(isProduction)
  const isDevelopment = !isProduction;

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: './src/app.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].[hash:8].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? 'production' : 'development'
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            'postcss-loader'
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
          exclude: /\.module\.css$/
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/images/[name].[hash:8].[ext]'
            }
          }
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/fonts/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[hash:8].css',
          chunkFilename: 'assets/css/[name].[hash:8].chunk.css'
        }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false
      }),
      !isProduction && new webpack.HotModuleReplacementPlugin(),
      !isProduction && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false
            },
            mangle: {
              safari10: true
            },
            output: {
              comments: false,
              ascii_only: true
            },
            warnings: false
          }
        }),
        new OptimizeCssAssetsPlugin()
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true,
      hot: true,
      stats: 'errors-warnings',
      clientLogLevel: 'silent',
      port: 3000
    }
  };
};
