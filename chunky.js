function chunk(arr, num) {
  var newArr = []
  var i = 0
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + num))
    i += num
  }
  return newArr
}
