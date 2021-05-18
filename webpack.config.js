const path = require('path');

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
      {
        test: /\.css$/,
        use: [
          'my-style-loader',
          'my-css-loader'
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'my-url-loader',
            options: {
              limit: 100 * 1024,
              filename: '[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
};
