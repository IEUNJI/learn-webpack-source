class HookCodeFactory {

  setup(instance, options) {
    this.options = options;

    instance._x = options.taps.map(tap => tap.fn);
  }

  args() {
    return this.options.args.join(',');
  }

  header() {
    return 'var _x = this._x;';
  }

  content() {
    let code = '';

    for (let i = 0; i < this.options.taps.length; i++) {
      code += `var _fn${i} = _x[${i}];`;
      code += `_fn${i}(${this.args()});`;
    }

    return code;
  }

  create(options) {
    return new Function(
      this.args(),
      this.header() + this.content()
    );
  }
}

module.exports = HookCodeFactory;
