const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  cssModules: true,
  target: 'serverless',
  cssLoaderOptions: {
    importLoaders: 1,
    tsCssModules: true,
    localIdentName: '[local]___[hash:base64:5]'
  }
});
