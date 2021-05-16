function loader1(inputSource) {
  console.log('loader1');
  return inputSource + '// loader1\r\n';
}

module.exports = loader1;
