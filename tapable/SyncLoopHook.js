const { SyncLoopHook } = require('tapable');

// 
// class SyncLoopHook {
//   constructor(args) {
//     this.taps = [];
//     this._args = args;
//   }

//   tap(name, cb) {
//     this.taps.push(cb);
//   }

//   call() {
//     let prevResult;

//     const args = Array.from(arguments).slice(0, this._args.length);

//     for (let i = 0; i < this.taps.length; i++) {
//       const returnResult = this.taps[i](typeof prevResult !== 'undefined' ? prevResult : args[0], ...args.slice(1));

//       if (typeof returnResult !== 'undefined') {
//         prevResult = returnResult;
//       }
//     }
//   }
// }

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

const hook = new SyncLoopHook(['name', 'age']);

hook.tap('1', (name, age) => {
  console.log('1', name, age);

  if (++counter1 === 1) {
    counter1 = 0;
    return;
  }

  return true;
});

hook.tap('2', (name, age) => {
  console.log('2', name, age);

  if (++counter2 === 2) {
    counter2 = 0;
    return;
  }

  return true;
});

hook.tap('3', (name, age) => {
  console.log('3', name, age);

  if (++counter3 === 3) {
    counter3 = 0;
    return;
  }

  return true;
});

hook.call('ieunji', 18);
