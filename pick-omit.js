function pick(obj, array) {
  const result = {}
  let keysObj = Object.keys(obj)
  keysObj.forEach((key) => {
    if (key == array) {
      result[key] = obj[key]
    }
  })
  return result
}

function omit(obj, array) {
  const result = {}
  let keysObj = Object.keys(obj)
  keysObj.forEach((key) => {
    if (key != array) {
      result[key] = obj[key]
    }
  })
  return result
}
