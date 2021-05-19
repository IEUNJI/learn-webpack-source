class OptimizePlugin {

  apply(compiler) {
    console.log('apply OptimizePlugin');

    compiler.hooks.compilation.tap('OptimizePlugin', compilation => {
      compilation.hooks.optimize.tap('OptimizePlugin', () => {
        console.log('OptimizePlugin', '正在优化');
      });
    });
  }
}

module.exports = OptimizePlugin;
