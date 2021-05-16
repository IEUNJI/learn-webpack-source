function loader2(inputSource) {
  console.log('loader2');
  return inputSource + '// loader2\r\n';
}

module.exports = loader2;
