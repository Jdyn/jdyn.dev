const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  poweredByHeader: false,
  reactStrictMode: true,
  target: 'serverless',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[hash:base64:5]'
  }
});
