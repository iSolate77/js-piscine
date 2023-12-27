function invert(obj) {
  let result = {}
  let keys = Object.keys(obj)
  keys.forEach((key) => {
    let val = obj[key]
    result[val] = key
  })
  return result
}
