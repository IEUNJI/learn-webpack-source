console.log('index');

const btn = document.createElement('button');

btn.innerHTML = 'click';

btn.addEventListener('click', () => {
  import('./hello.js').then(module => {
    console.log(module.default);
  });
});

document.body.appendChild(btn);
