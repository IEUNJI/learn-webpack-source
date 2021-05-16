function loader3(inputSource) {
  console.log('loader3');

  // 异步 loader
  const callback = this.async();

  setTimeout(() => {
    // callback 参数：errors response
    callback(null, inputSource + '// loader3\r\n')
  }, 1000);
}

/**
 * webpack 的 loader 调用顺序：
 * 先正序调用 pitch 函数，如果存在返回值，则将返回值抛给上一个 loader 的 normal 函数，
 * 然后倒序调用 normal 函数。
 */

loader3.pitch = function () {
  console.log('loader3 pitch');
  return 'const number = 0;\r\n';
};

module.exports = loader3;
