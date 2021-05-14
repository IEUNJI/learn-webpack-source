class Hook {
  constructor(args) {
    if (!Array.isArray(args)) {
      args = [];
    }
    this._args = args;
    this.taps = [];
    this._x = undefined;
  }

  tap(options, fn) {
    if (typeof options === 'string') {
      options = { name: options };
    }
    options.fn = fn;

    this._insert(options);
  }

  _insert(item) {
    this.taps.push(item);
  }

  call(...args) {
    const callMethod = this._createCall();

    callMethod.apply(this, args);
  }

  _createCall() {
    return this.compile({
      taps: this.taps,
      args: this._args
    });
  }
}

module.exports = Hook;
