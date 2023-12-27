function pick(obj, array) {
  let result = {}
  array.forEach((key) => {
    result[key] = obj[key]
  })
  return result
}

function omit(obj, array) {
  let result = {}
  let keys = Object.keys(obj)
  keys.forEach((key) => {
    if (!array.includes(key)) {
      result[key] = obj[key]
    }
  })
  return result
}
