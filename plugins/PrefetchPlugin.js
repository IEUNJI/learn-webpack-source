const HtmlWebpackPlugin = require('html-webpack-plugin');

class PrefetchPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    console.log('apply PrefetchPlugin');

    compiler.hooks.compilation.tap('PrefetchPlugin', compilation => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync('PrefetchPlugin', (htmlData, callback) => {
        const { chunks } = compilation;

        chunks.forEach(chunk => {
          const prefetchChunkIds = chunk.getChildIdsByOrders().prefetch;

          if (prefetchChunkIds) {
            prefetchChunkIds.forEach(prefetchChunkId => {
              const { files } = chunks.find(item => item.id === prefetchChunkId);

              files.forEach(file => {
                if (file.endsWith('js')) {
                  console.log('PrefetchPlugin', `添加 prefetch：${file}`);

                  htmlData.assetTags.styles.push({
                    tagName: 'link',
                    voidTag: true,
                    attributes: {
                      rel: 'prefetch',
                      as: 'script',
                      href: file
                    }
                  });
                }
              });
            });
          }
        });

        callback();
      });
    });
  }
}

module.exports = PrefetchPlugin;
