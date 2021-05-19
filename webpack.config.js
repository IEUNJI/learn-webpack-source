const path = require('path');
const DonePlugin = require('./plugins/DonePlugin');
const OptimizePlugin = require('./plugins/OptimizePlugin');
const AsyncPlugin = require('./plugins/AsyncPlugin');
const ZipPlugin = require('./plugins/ZipPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolveLoader: {
    modules: ['node_modules', 'loaders']
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    new DonePlugin({
      message: '编译完成'
    }),
    new OptimizePlugin(),
    new AsyncPlugin(),
    new ZipPlugin({
      name: 'assets.zip'
    })
  ]
};
