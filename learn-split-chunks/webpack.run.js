const webpack = require('./webpack');

const webpackConfig = require('./webpack.config');

webpack(webpackConfig, (error, stats) => {
  console.log('done');
});
