const path = require('path');
const loaderUtils = require('loader-utils');
const babel = require('@babel/core');

function loader(inputSource) {
  console.log('my-babel-loader', loaderUtils.getOptions(this));

  const options = {
    presets: ['@babel/preset-env'],
    sourceMaps: true,
    filename: path.basename(this.resourcePath)
  };

  const { code, map, ast } = babel.transform(inputSource, options);

  return this.callback(null, code, map, ast);
}

module.exports = loader;
