console.log('index');

import(
  /* webpackChunkName: "lazy" */
  './lazy'
).then(module => {
  console.log(module.default);
});
