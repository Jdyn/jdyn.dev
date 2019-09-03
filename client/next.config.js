const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  target: 'serverless',
  builds: [{ src: 'package.json', use: '@now/next' }],
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    tsCssModules: true,
    localIdentName: '[local]___[hash:base64:5]'
  }
});
