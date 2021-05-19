console.log('index');

const lazyBtn = document.createElement('button');

lazyBtn.innerHTML = 'lazyBtn';
lazyBtn.addEventListener('click', () => {
  import(
    /* webpackChunkName: "lazy1" */
    /* webpackPrefetch: true */
    './lazy1'
  ).then(module => {
    console.log(module.default);
  });

  import(
    /* webpackChunkName: "lazy2" */
    /* webpackPrefetch: true */
    './lazy2'
  ).then(module => {
    console.log(module.default);
  });
});

document.querySelector('#root').appendChild(lazyBtn);
