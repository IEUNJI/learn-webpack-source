/**
 * webpack/bin/webpack.js 核心代码
 */

if (false) {
  const path = require('path');
  const pkgPath = require.resolve('webpack-cli/package.json');
  const pkg = require(pkgPath);
  require(path.resolve(
    path.dirname(pkgPath),
    'bin/cli.js'
    // pkg.bin['webpack-cli']
  ));
}

/**
 * webpack-cli/bin/cli.js 核心代码
 */

if (true) {
  const webpack = require('webpack');
  const config = require('./webpack.config');
  debugger
  const compiler = webpack(config);
  compiler.run((err, stats) => {
    // console.log(stats);
  });
}
