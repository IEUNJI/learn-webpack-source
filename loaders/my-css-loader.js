const postcss = require('postcss');
const Tokenizer = require('css-selector-tokenizer');
const loaderUtils = require('loader-utils');

function createPlugin(options) {
  return function (css) {
    const { importItems, urlItems } = options;

    css.walkAtRules(/^import$/, rule => {
      const values = Tokenizer.parseValues(rule.params);

      const url = values.nodes[0].nodes[0];
      importItems.push(url.value);
    });

    css.walkDecls(decl => {
      const values = Tokenizer.parseValues(decl.value);

      values.nodes.forEach(value => {
        value.nodes.forEach(item => {
          if (item.type === 'url') {
            const rawUrl = item.url;
            item.url = `_CSS_URL_${urlItems.length}_`;
            urlItems.push(rawUrl);
          }
        });
      });

      decl.value = Tokenizer.stringifyValues(values);
    });
  };
}

function loader(inputSource) {
  const callback = this.async();

  const options = {
    importItems: [],
    urlItems: []
  };

  const pipeline = postcss([
    createPlugin(options)
  ]);

  pipeline.process(inputSource).then(result => {
    const { importItems, urlItems } = options;

    const importJS = importItems.map(imp => {
      // 绝对路径转相对路径
      return 'require(' + loaderUtils.stringifyRequest(this, imp) + ')';
    }).join('\n');

    let cssString = JSON.stringify(result.css);
    cssString = cssString.replace(/@import\s+?.+?;/g, '');
    cssString = cssString.replace(/_CSS_URL_(\d+?)_/g, (matched, group1) => {
      return '"+require("' + urlItems[group1] + '")+"';
    });

    callback(null, `
      ${importJS};
      module.exports = ${cssString};
    `);
  });
}

module.exports = loader;
