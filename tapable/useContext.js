const { SyncLoopHook } = require('tapable');

const hook = new SyncLoopHook(['name', 'age']);

hook.intercept({
  context: true, // 使用上下文
  loop(context) {
    context.loop = true;
    console.log('loop', context);
  }
});

let counter = 0;

hook.tap({ context: true, name: '1' }, (context, name, age) => {
  console.log('1', context, name, age);

  if (++counter === 2) {
    counter = 0;
    return;
  }

  return true;
});

hook.call('ieunji', 18);
