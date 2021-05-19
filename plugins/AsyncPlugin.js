class AsyncPlugin {

  apply(compiler) {
    console.log('apply AsyncPlugin');

    // emit 异步串行 AsyncSeriesHook
    compiler.hooks.emit.tapAsync('AsyncPlugin', (compilation, callback) => {
      console.log('AsyncPlugin', '等待几秒');
      setTimeout(callback, 1000);
    });
  }
}

module.exports = AsyncPlugin;
