function loader1(inputSource) {
  console.log('loader1');
  return inputSource + '// loader1\r\n';
}

loader1.pitch = function () {
  console.log('loader1 pitch');
};

module.exports = loader1;
