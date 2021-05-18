const { getOptions, interpolateName } = require('loader-utils');

function loader(content) {
  const options = getOptions(this) || {};
  const filename = options.filename || '[name].[hash].[ext]';

  const outputFilename = interpolateName(this, filename, { content });
  this.emitFile(outputFilename, content);

  return `module.exports = "${outputFilename}";`;
}

loader.raw = true;

module.exports = loader;
