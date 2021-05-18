const loaderUtils = require('loader-utils');

function loader(source) {
  const script = `
    var style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `;

  return script;
}

loader.pitch = function (remindingRequest) {
  const script = `
  var style = document.createElement('style');
  style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remindingRequest)});
  document.head.appendChild(style);
`;

  return script;
};

module.exports = loader;
