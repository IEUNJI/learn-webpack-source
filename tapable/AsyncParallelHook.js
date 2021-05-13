const { AsyncParallelHook } = require('tapable');

// 异步：说明回调函数里可以执行异步代码
// 并行：说明回调函数是并发执行的
// class AsyncParallelHook {
//   constructor(args) {
//     this.taps = [];
//     this._args = args;
//   }

//   tapAsync(name, cb) {
//     this.taps.push(cb);
//   }

//   callAsync() {
//     const args = Array.from(arguments).slice(0, this._args.length);
//     const finalCallback = arguments[arguments.length - 1];

//     let count = 0;
//     const length = this.taps.length;

//     function done() {
//       if (++count === length) {
//         finalCallback();
//       }
//     }

//     this.taps.forEach(cb => cb(...args, done));
//   }
// }

const hook = new AsyncParallelHook(['name', 'age']);

hook.tapAsync('1', (name, age, done) => {
  setTimeout(() => {
    console.log('1', name, age);
    done();
  }, 1000);
});

hook.tapAsync('2', (name, age, done) => {
  setTimeout(() => {
    console.log('2', name, age);
    done();
  }, 2000);
});

hook.tapAsync('3', (name, age, done) => {
  setTimeout(() => {
    console.log('3', name, age);
    done();
  }, 3000);
});

hook.callAsync('ieunji', 18, () => {
  console.log('done');
});
