function split(strOrArr, delim) {
  let arr = []
  let curr = ''
  for (let i = 0; i < strOrArr.length; i++) {
    if (strOrArr[i] === delim) {
      arr.push(curr)
      curr = ''
    } else {
      curr += strOrArr[i]
    }
  }
  arr.push(curr)
  return arr
}

function join(arrOrStr, delim) {
  let str = ''
  for (let i = 0; i < arrOrStr.length; i++) {
    str += arrOrStr[i]
    if (i !== arrOrStr.length - 1) {
      str += delim
    }
  }
  return str
}
