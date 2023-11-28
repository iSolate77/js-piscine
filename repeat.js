function repeat(str, num) {
  var result = ''
  while (num > 0) {
    result += str
    num--
  }
  return result
}
