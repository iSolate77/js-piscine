function split(str, delim) {
  let arr = []
  let temp = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== delim) {
      temp += str[i]
    } else {
      arr.push(temp)
      temp = ''
    }
  }
  arr.push(temp)
  return arr
}

function join(arr, delim) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += arr[i]
    } else {
      str += arr[i] + delim
    }
  }
  return str
}
