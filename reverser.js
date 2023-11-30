function reverseArray(arrOrStr) {
  if (typeof arrOrStr === 'string') {
    return reverseString(arrOrStr)
  }
  return reverseArray(arrOrStr)
}

function reverseString(str) {
  var reversed = ''
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}

function reverseArray(arr) {
  var reversed = []
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }
  return reversed
}
