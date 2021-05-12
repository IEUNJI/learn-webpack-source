// const { SyncBailHook } = require('tapable');

// 当回调函数返回 非undefined 的值，就会停止后续的调用
class SyncBailHook {
  constructor(args) {
    this.taps = [];
    this._args = args;
  }

  tap(name, cb) {
    this.taps.push(cb);
  }

  call() {
    const args = Array.from(arguments).slice(0, this._args.length);

    for (let i = 0; i < this.taps.length; i++) {
      const result = this.taps[i](...args);

      if (typeof result !== 'undefined') {
        break;
      }
    }
  }
}

const hook = new SyncBailHook(['name', 'age']);

hook.tap('1', (name, age) => {
  console.log('1', name, age);
});

hook.tap('2', (name, age) => {
  console.log('2', name, age);

  return '2 error';
});

hook.tap('3', (name, age) => {
  console.log('3', name, age);
});

hook.call('ieunji', 18);
