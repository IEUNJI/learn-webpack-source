import hello from './hello';

import(
  /* webpackChunkName: "lazy" */
  './lazy'
).then(module => {
  console.log(module.default);
});

console.log(hello);
