function sums(num) {
  var result = []
  function recurse(num, arr) {
    if (num === 0) {
      result.push(arr)
      return
    }
    if (num < 0) {
      return
    }
    for (var i = 1; i <= num; i++) {
      recurse(num - i, arr.concat(i))
    }
  }
  recurse(num, [])
  return result
}
