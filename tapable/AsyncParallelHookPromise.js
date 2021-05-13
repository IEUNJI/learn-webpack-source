const { AsyncParallelHook } = require('tapable');

// 异步：说明回调函数里可以执行异步代码
// 并行：说明回调函数是并发执行的
// class AsyncParallelHook {
//   constructor(args) {
//     this.taps = [];
//     this._args = args;
//   }

//   tapPromise(name, cb) {
//     this.taps.push(cb);
//   }

//   promise() {
//     const args = Array.from(arguments).slice(0, this._args.length);

//     return Promise.all(this.taps.map(cb => cb(...args)));
//   }
// }

const hook = new AsyncParallelHook(['name', 'age']);

hook.tapPromise('1', (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1', name, age);
      resolve();
    }, 1000);
  });
});

hook.tapPromise('2', (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2', name, age);
      resolve();
    }, 2000);
  });
});

hook.tapPromise('3', (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('3', name, age);
      resolve();
    }, 3000);
  });
});

hook.promise('ieunji', 18).then(() => {
  console.log('done');
});
