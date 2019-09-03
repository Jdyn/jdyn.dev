const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  target: 'serverless',
  builds: [{ src: 'next.config.js', use: '@now/next' }],
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    tsCssModules: true,
    localIdentName: '[local]___[hash:base64:5]'
  }
});
