function loader2(inputSource) {
  console.log('loader2');
  return inputSource + '// loader2\r\n';
}

loader2.pitch = function () {
  console.log('loader2 pitch');
};

module.exports = loader2;
