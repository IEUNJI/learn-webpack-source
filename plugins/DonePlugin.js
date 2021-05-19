class DonePlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    console.log('apply DonePlugin');

    compiler.hooks.done.tap('DonePlugin', () => {
      console.log('DonePlugin', this.options.message);
    });
  }
}

module.exports = DonePlugin;
