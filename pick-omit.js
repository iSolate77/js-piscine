function pick(obj, array) {
  if (typeof array === 'string') {
    array = [array]
  }

  return array.reduce((result, key) => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key]
    }
    return result
  }, {})
}

function omit(obj, array) {
  if (typeof array === 'string') {
    array = [array]
  }

  return Object.keys(obj).reduce((result, key) => {
    if (!array.includes(key)) {
      result[key] = obj[key]
    }
    return result
  }, {})
}
