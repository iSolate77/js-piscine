function filterValues(obj, callback) {
  let result = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && callback(obj[key])) {
      result[key] = obj[key]
    }
  }
  return result
}

function mapValues(obj, callback) {
  let result = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = callback(obj[key])
    }
  }
  return result
}

function reduceValues(obj, callback, initialValue) {
  let accumulator = initialValue
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      accumulator = callback(accumulator, obj[key])
    }
  }
  return accumulator
}
