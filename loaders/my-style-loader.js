function loader(source) {
  const script = `
    var style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `;

  return script;
}

module.exports = loader;
