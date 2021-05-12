// const { SyncHook } = require('tapable');

// 同步调用
class SyncHook {
  constructor(args) {
    this.taps = [];
    this._args = args;
  }

  tap(name, cb) {
    this.taps.push(cb);
  }

  call() {
    const args = Array.from(arguments).slice(0, this._args.length);

    this.taps.forEach(cb => cb(...args));
  }
}

const hook = new SyncHook(['name', 'age']);

hook.tap('1', (name, age) => {
  console.log('1', name, age);
});

hook.tap('2', (name, age) => {
  console.log('2', name, age);
});

hook.call('ieunji', 18);
