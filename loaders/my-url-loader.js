const mime = require('mime');
const { getOptions } = require('loader-utils');

const fileLoader = require('./my-file-loader');

function loader(content) {
  const options = getOptions(this) || {};
  const limit = options.limit || 0;

  if (content.length < limit) {
    const contentType = mime.getType(this.resourcePath);
    const base64 = `data:${contentType};base64,${content.toString('base64')}`;
    return `module.exports = "${base64}";`;
  }

  return fileLoader.call(this, content);
}

loader.raw = true;

module.exports = loader;
