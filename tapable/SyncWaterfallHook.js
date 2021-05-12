// const { SyncWaterfallHook } = require('tapable');

// 上一个回调函数返回 非undefined 的值，将作为第一个参数传递给下一个回调函数
class SyncWaterfallHook {
  constructor(args) {
    this.taps = [];
    this._args = args;
  }

  tap(name, cb) {
    this.taps.push(cb);
  }

  call() {
    let prevResult;

    const args = Array.from(arguments).slice(0, this._args.length);

    for (let i = 0; i < this.taps.length; i++) {
      const returnResult = this.taps[i](typeof prevResult !== 'undefined' ? prevResult : args[0], ...args.slice(1));

      if (typeof returnResult !== 'undefined') {
        prevResult = returnResult;
      }
    }
  }
}

const hook = new SyncWaterfallHook(['name', 'age']);

hook.tap('1', (name, age) => {
  console.log('1', name, age);

  return 'ieunji-1';
});

hook.tap('2', (name, age) => {
  console.log('2', name, age);

  // return 'ieunji-2';
});

hook.tap('3', (name, age) => {
  console.log('3', name, age);

  return 'ieunji-3';
});

hook.call('ieunji', 18);
