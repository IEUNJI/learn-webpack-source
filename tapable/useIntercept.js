const { SyncHook } = require('tapable');

const hook = new SyncHook(['name', 'age']);

hook.intercept({
  // 注册 tap 时触发
  register() {
    console.log('register intercept', arguments);
  },
  // 调用 call 时触发
  call() {
    console.log('call intercept', arguments);
  },
  // 调用 tap 时触发
  tap() {
    console.log('tap intercept', arguments);
  }
});

hook.tap('1', (name, age) => {
  console.log('1', name, age);
});

hook.tap('2', (name, age) => {
  console.log('2', name, age);
});

hook.call('ieunji', 18);
