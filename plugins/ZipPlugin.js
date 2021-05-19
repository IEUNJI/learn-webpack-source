const JSZip = require('jszip');
const { RawSource } = require('webpack-sources');

class ZipPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    console.log('apply ZipPlugin');

    compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
      const { assets } = compilation;
      const zip = new JSZip();

      for (const filename in assets) {
        zip.file(filename, assets[filename].source());
      }

      zip.generateAsync({ type: 'nodebuffer' }).then(content => {
        const name = this.options.name || 'dist.zip';

        assets[name] = new RawSource(content);

        callback(null, compilation);
      });
    });
  }
}

module.exports = ZipPlugin;
