const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'none',
  resolveLoader: {
    modules: ['node_modules', 'loaders']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'loader1',
          'loader2',
          'loader3'
        ]
      }
    ]
  }
};
