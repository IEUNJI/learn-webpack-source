function loader3(inputSource) {
  console.log('loader3');

  // 异步 loader
  const callback = this.async();

  setTimeout(() => {
    // callback 参数：errors response
    callback(null, inputSource + '// loader3\r\n')
  }, 1000);
}

module.exports = loader3;
